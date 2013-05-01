=== WP Simple Booking Calendar ===
Contributors: Bryght, BestWebSoft
Tags: availability calendar, booking calendar, reservation calendar, availability, booking, calendar, hotel, holiday home, dateblocker, date blocker, scheme, bed and breakfast, belegungsplan
Requires at least: 3.0
Tested up to: 3.5.1
Stable tag: 1.2

This booking calendar shows when something is booked or available. Use it to show when your holiday home is available for rent, for example.

== Description ==

Do you have something that you rent out, such as a holiday home or piece of equipment? Do you want to show people when it is available for rent? You can create, edit and publish an availability calendar with just a few clicks with the WP Simple Booking Calendar. This booking calendar is very easy to use! You can manage the availability (bookings) on a daily basis and embedding the booking calendar on a page takes only one mouse click. You can also use the WP Simple Booking Calendar Widget to show a calendar on your WordPress website. Check out http://www.wpsimplebookingcalendar.com for more information.

You can use this booking calendar as:

* A booking calendar for a holiday home, bed & breakfast, condo or hotel
* An availability calendar for a room or office
* An availability calendar for  a car or boat
* A reservation scheme for equipment
* A shift calendar
* Whatever you like!

Features of the free version:

* Create a calendar and set status per date
* Generate a token to insert the calendar in a page or post
* WP Simple Booking Calendar Widget
* Can be translated into other languages using PO files

Features of the full version:

* Create an unlimited number of calendars
* Show a legend near the calendar
* Multiple month view
* Add and save your notes for each day on each of your calendars
* Edit multiple days in one click
* Generate a token to insert the calendar in a page or post
* WP Simple Booking Calendar Widget
* Can be translated into other languages using PO files
* Download the full version at: http://www.wpsimplebookingcalendar.com


== Installation ==

1. Upload `wp-simple-booking-calendar` directory to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Go to the settings page of the plugin to setup a calendar
4. Embed the calendar on any page or post using the shortcode **[sbc]**

A sidebar widget is also available.


== Frequently Asked Questions ==

= How can I embed the calendar on a page or post? =

Use the 'Generate token' field below your editor. An example of a token: [sbc id="1" legend="no" title="yes" view="1"]. If you paste this token in a page it will show the calendar with ID 1, no legend, with title and a 1 month view.

= How can I remove the calendar title from displaying? =

Edit the shortcode: title="no".

= I have another question =

Please see http://www.wpsimplebookingcalendar.com for more information and ask your questions there!


== Screenshots ==

1. Two month view of the booking calendar (free version supports one month view only)
2. The calendar in a sidebar as widget
3. Editing the calendar

== Changelog ==

= 1.2 =
* Changed .live() to .on() for better compatibility with jQuery

= 1.1 =
* Fixed Warning: array_key_exists() error some users experienced
* Fixed enqueue_scripts

= 1.0 =
* First release

== Upgrade Notice ==

= 1.2 =
* Small improvement for the free version

= 1.1 =
* Two small fixes

= 1.0 =
* Stable release