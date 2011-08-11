/*
 * @package WP Simple Booking Calendar
 *
 * Copyright (c) 2011 WP Simple Booking Calendar
 */

jQuery(function($) {
	
	// Delete calendar
	$('#sbc-wrapper a.submitdelete').bind('click', function(event) {
		var $calendarRow = $(this).closest('tr').addClass('error');
		if (!confirm($(this).attr('title'))) {
			$calendarRow.removeClass('error');
			return false;
		}
	});
	
	
	/**
	 * Editor
	 */
	var $editCalendarForm = $('#sbc-wrapper #edit-calendar');
	if ($editCalendarForm.length) {
		sbcCalendarData = JSON.parse(sbcCalendarDataJson);
	}
	
	function getCurrentMonth() {
		return $('#sbc-calendar .sbc-navigation select[name="sbcMonth"]').val();
	}
	
	function getCurrentYear() {
		return $('#sbc-calendar .sbc-navigation select[name="sbcYear"]').val();
	}
	
	// Form validation
	$editCalendarForm.validate({
		errorClass: 'error',
		onSubmit: false
	});
	$editCalendarForm.bind('submit', function() {
		$('input[name="calendarData"]', $editCalendarForm).val(JSON.stringify(sbcCalendarData));
		if ($editCalendarForm.valid()) {
			return true;
		}
		return false;
	});
	
	// Status selector
	$('#sbc-editor select').live('change', function() {
		var $this = $(this);
		var statusClass = $this.find('option:selected').attr('class');
		
		// Update editor class
		$this.closest('tr').children('td.sbc-editor-day').attr('class', 'sbc-editor-day ' + statusClass);
		
		// Update calendar class
		$('#sbc-wrapper table tbody td.sbc-' + $this.attr('name'))
			.removeClass('sbc-status-free')
			.removeClass('sbc-status-booked')
			.removeClass('sbc-status-changeover')
			.addClass(statusClass);
		
		// Update calendar data
		var currentYear = 'year' + getCurrentYear();
		var currentMonth = 'month' + getCurrentMonth();
		var currentDay = $this.attr('name');
		
		if (!(currentYear in sbcCalendarData)) {
			sbcCalendarData[currentYear] = {};
		}
		
		if (!(currentMonth in sbcCalendarData[currentYear])) {
			sbcCalendarData[currentYear][currentMonth] = {};
		}
		
		sbcCalendarData[currentYear][currentMonth][currentDay] = $this.val();
	});
	
	
	/**
	 * Editor navigation
	 */
	function ajaxCalendarUpdate(operation) {
		var data = {
			action: 'calendarNavigation',
			operation: operation,
			calendarData: JSON.stringify(sbcCalendarData), 
			month: getCurrentMonth(),
			year: getCurrentYear()
		};
		$('#sbc-calendar-wrapper div.sbc-loader').addClass('sbc-loader-visible');
		$.post(ajaxurl, data, function(response) {
			$('#sbc-calendar-wrapper').html(response);
		});
	}
		
	$('a.sbc-prev-month, a.sbc-next-month', $('#sbc-calendar-wrapper')).live('click', function(event) {
		event.preventDefault();
		ajaxCalendarUpdate($(this).is('.sbc-prev-month') ? 'prevMonth' : 'nextMonth');
	});
	
	$('#sbc-calendar .sbc-navigation select').live('change', function() {
		ajaxCalendarUpdate('date');
	});
});