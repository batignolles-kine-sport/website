import { useEffect } from 'react';

declare global {
    interface Window {
        __ow: any;
        OpenWidget: any;
    }
}

const OpenWidget = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            // OpenWidget configuration
            window.__ow = window.__ow || {};
            window.__ow.organizationId = "3b13b121-285d-4042-9aaf-f655721415e8";
            window.__ow.integration_name = "manual_settings";
            window.__ow.product_name = "openwidget";

            // Script injection logic
            (function (n, t, c) {
                function i(n: any) { return e._h ? e._h.apply(null, n) : e._q.push(n) }
                var e: any = { _q: [], _h: null, _v: "2.0", on: function () { i(["on", c.call(arguments)]) }, once: function () { i(["once", c.call(arguments)]) }, off: function () { i(["off", c.call(arguments)]) }, get: function () { if (!e._h) throw new Error("[OpenWidget] You can't use getters before load."); return i(["get", c.call(arguments)]) }, call: function () { i(["call", c.call(arguments)]) }, init: function () { var n = t.createElement("script"); n.async = !0, n.type = "text/javascript", n.src = "https://cdn.openwidget.com/openwidget.js", t.head.appendChild(n) } };
                !n.__ow.asyncInit && e.init(), n.OpenWidget = n.OpenWidget || e
            }(window, document, [].slice))

            console.log('OpenWidget loaded lazily');
        }, 5000); // 5 seconds delay

        return () => clearTimeout(timer);
    }, []);

    return null; // This component renders nothing
};

export default OpenWidget;
