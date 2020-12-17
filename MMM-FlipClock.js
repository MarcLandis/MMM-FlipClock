/* global Module */

/* Magic Mirror
 * Module: MMM-FlipClock
 *
 * By Dirk Rettschlag
 * MIT Licensed.
 */
Module.register("MMM-FlipClock", {
    // Module config defaults.
    defaults: {
        timeFormat: config.timeFormat,
        seperator: ":",
        displaySeconds: true,
        showPeriod: true,
        showPeriodUpper: true,
        showDate: true,
        showWeek: false,
        dateFormat: "dddd, LL",
        timezone: null,
        easing: "ease-out-bounce",
    },
    // Define required scripts.
    getScripts: function() {
        return ["moment.js", "moment-timezone.js", this.file("flip/flip.js")];
    },
    // Define styles.
    getStyles: function() {
        return [this.file("flip/flip.css"), "MMM-FlipClock.css"];
    },
    // Define start sequence.
    start: function() {
        Log.info("Starting module: " + this.name);

        // Set locale.
        moment.locale(config.language);
    },
    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");

        var dateWrapper = document.createElement("div");
        var timeWrapper = document.createElement("div");
        var weekWrapper = document.createElement("div");

        // Style Wrappers
        dateWrapper.className = "date normal medium";
        weekWrapper.className = "week dimmed medium";

        // var timeString;
        var now = moment();
        if (this.config.timezone) {
            now.tz(this.config.timezone);
        }

        if (this.config.showDate) {
            var dataKeyDate = document.createAttribute("data-key");
            dataKeyDate.value = "date";
            dateWrapper.attributes.setNamedItem(dataKeyDate);

            var dataViewDate = document.createAttribute("data-view");
            dataViewDate.value = "text";
            dateWrapper.attributes.setNamedItem(dataViewDate);
        }
        if (this.config.showWeek) {
            var dataKeyWeek = document.createAttribute("data-key");
            dataKeyWeek.value = "week";
            weekWrapper.attributes.setNamedItem(dataKeyWeek);

            var dataViewWeek = document.createAttribute("data-view");
            dataViewWeek.value = "text";
            weekWrapper.attributes.setNamedItem(dataViewWeek);
        }

        // Hours
        var dataHoursWrapper = document.createElement("span");

        var dataKeyHours = document.createAttribute("data-key");
        dataKeyHours.value = "hours";
        dataHoursWrapper.attributes.setNamedItem(dataKeyHours);

        var dataRepeatHours = document.createAttribute("data-repeat");
        dataRepeatHours.value = "true";
        dataHoursWrapper.attributes.setNamedItem(dataRepeatHours);

        var dataTransformHours = document.createAttribute("data-transform");
        dataTransformHours.value = "pad(00)";
        dataHoursWrapper.attributes.setNamedItem(dataTransformHours);

        var dataHoursViewWrapper = document.createElement("span");

        var dataViewHours = document.createAttribute("data-view");
        dataViewHours.value = "flip";
        dataHoursViewWrapper.attributes.setNamedItem(dataViewHours);

        var dataStyleHours = document.createAttribute("data-style");
        dataStyleHours.value = "flip-easing: " + this.config.easing;
        dataHoursViewWrapper.attributes.setNamedItem(dataStyleHours);

        dataHoursWrapper.appendChild(dataHoursViewWrapper);

        timeWrapper.appendChild(dataHoursWrapper);

        //Seperator
        var dataSeperator1Wrapper = document.createElement("span");
        dataSeperator1Wrapper.className = "tick-text-inline";

        var dataKeyHSeperator1 = document.createAttribute("data-key");
        dataKeyHSeperator1.value = "sep";
        dataSeperator1Wrapper.attributes.setNamedItem(dataKeyHSeperator1);

        var dataViewSeperator1 = document.createAttribute("data-view");
        dataViewSeperator1.value = "text";
        dataSeperator1Wrapper.attributes.setNamedItem(dataViewSeperator1);

        timeWrapper.appendChild(dataSeperator1Wrapper);

        //Minutes
        var dataMinutesWrapper = document.createElement("span");

        var dataKeyMinutes = document.createAttribute("data-key");
        dataKeyMinutes.value = "minutes";
        dataMinutesWrapper.attributes.setNamedItem(dataKeyMinutes);

        var dataRepeatMinutes = document.createAttribute("data-repeat");
        dataRepeatMinutes.value = "true";
        dataMinutesWrapper.attributes.setNamedItem(dataRepeatMinutes);

        var dataTransformMinutes = document.createAttribute("data-transform");
        dataTransformMinutes.value = "pad(00)";
        dataMinutesWrapper.attributes.setNamedItem(dataTransformMinutes);

        var dataMinutesViewWrapper = document.createElement("span");

        var dataViewMinutes = document.createAttribute("data-view");
        dataViewMinutes.value = "flip";
        dataMinutesViewWrapper.attributes.setNamedItem(dataViewMinutes);

        var dataStyleMinutes = document.createAttribute("data-style");
        dataStyleMinutes.value = "flip-easing: " + this.config.easing;
        dataMinutesViewWrapper.attributes.setNamedItem(dataStyleMinutes);

        dataMinutesWrapper.appendChild(dataMinutesViewWrapper);

        timeWrapper.appendChild(dataMinutesWrapper);

        if (this.config.displaySeconds) {
            //Seperator
            var dataSeperator2Wrapper = document.createElement("span");
            dataSeperator2Wrapper.className = "tick-text-inline";

            var dataKeyHSeperator2 = document.createAttribute("data-key");
            dataKeyHSeperator2.value = "sep";
            dataSeperator2Wrapper.attributes.setNamedItem(dataKeyHSeperator2);

            var dataViewSeperator2 = document.createAttribute("data-view");
            dataViewSeperator2.value = "text";
            dataSeperator2Wrapper.attributes.setNamedItem(dataViewSeperator2);

            timeWrapper.appendChild(dataSeperator2Wrapper);

            //Seconds
            var dataSecondsWrapper = document.createElement("span");

            var dataKeySeconds = document.createAttribute("data-key");
            dataKeySeconds.value = "seconds";
            dataSecondsWrapper.attributes.setNamedItem(dataKeySeconds);

            var dataRepeatSeconds = document.createAttribute("data-repeat");
            dataRepeatSeconds.value = "true";
            dataSecondsWrapper.attributes.setNamedItem(dataRepeatSeconds);

            var dataTransformSeconds = document.createAttribute("data-transform");
            dataTransformSeconds.value = "pad(00)";
            dataSecondsWrapper.attributes.setNamedItem(dataTransformSeconds);

            var dataSecondsViewWrapper = document.createElement("span");

            var dataViewSeconds = document.createAttribute("data-view");
            dataViewSeconds.value = "flip";
            dataSecondsViewWrapper.attributes.setNamedItem(dataViewSeconds);

            var dataStyleSeconds = document.createAttribute("data-style");
            dataStyleSeconds.value = "flip-easing: " + this.config.easing;
            dataSecondsViewWrapper.attributes.setNamedItem(dataStyleSeconds);

            dataSecondsWrapper.appendChild(dataSecondsViewWrapper);

            timeWrapper.appendChild(dataSecondsWrapper);
        }

        if (this.config.showPeriod && this.config.timeFormat !== 24) {
            //Period
            var dataPeriodWrapper = document.createElement("span");

            var dataViewPeriod = document.createAttribute("data-view");
            dataViewPeriod.value = "flip";
            dataPeriodWrapper.attributes.setNamedItem(dataViewPeriod);

            var dataKeyPeriod = document.createAttribute("data-key");
            dataKeyPeriod.value = "period";
            dataPeriodWrapper.attributes.setNamedItem(dataKeyPeriod);

            timeWrapper.appendChild(dataPeriodWrapper);
        }

        wrapper.appendChild(dateWrapper);
        wrapper.appendChild(timeWrapper);
        wrapper.appendChild(weekWrapper);

        var timeFormat = "HH";
        if (this.config.timeFormat !== 24) {
            timeFormat = "h";
        }
        Tick.options.setConstant("HOUR_FORMAT", timeFormat);

        var periodFormat = "a";
        if (this.config.showPeriodUpper) {
            periodFormat = "A";
        }
        Tick.options.setConstant("PERIOD_FORMAT", periodFormat);

        var module = this;

        var tick = Tick.DOM.create(wrapper, {
            credits: false,
            didInit: function(tick) {
                Tick.helper.interval(function() {
                    var now = moment();
                    if (module.config.timezone) {
                        now.tz(module.config.timezone);
                    }
                    tick.value = {
                        sep: module.config.seperator,
                        hours: now.format(tick._constants["HOUR_FORMAT"]),
                        minutes: now.format("mm"),
                        seconds: now.format("ss"),
                        period: now.format(tick._constants["PERIOD_FORMAT"]),
                        date: now.format(module.config.dateFormat),
                        week: module.translate("WEEK", { weekNumber: now.week() }),
                    };
                });
            },
        });

        // Return the wrapper to the dom.
        return wrapper;
    },
});