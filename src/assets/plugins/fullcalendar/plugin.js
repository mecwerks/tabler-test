require.config({
    shim: {
        'fullcalendar': ['moment', 'jquery'],
    },
    paths: {
        'fullcalendar': '{{site.baseurl}}/assets/plugins/fullcalendar/js/fullcalendar.min',
        'moment': '{{site.baseurl}}/assets/plugins/fullcalendar/js/moment.min',
    }
});