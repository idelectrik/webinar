/*! For license information please see script.js.LICENSE.txt */
(() => {
    "use strict";
    function o(n) {
        var r = t[n];
        if (void 0 !== r) return r.exports;
        var i = t[n] = {
            exports: {}
        };
        return e[n](i, i.exports, o), i.exports
    }
    o.d = (e, t) => {
        for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        const e = o(910);
        let t, n;
        console.log("Script started successfully"), WA.onInit().then((() => {
            console.log("Scripting API ready"), console.log("Player tags: ", WA.player.tags), WA.player.tags.includes("editor") && (WA.room.showLayer("exitNorthConfig"), WA.room.showLayer("exitSouthConfig"), WA.room.showLayer("exitWestConfig"), WA.room.showLayer("exitEastConfig")), (0, e.bootstrapExtra)().then((() => {
                console.log("Scripting API Extra ready")
            })).catch((e => console.error(e)))
        })).catch((e => console.error(e)));
        const r = [{
            zone: "needHelp",
            message: "Do you need some guidance? We are happy to help you out.",
            cta: [{
                label: "Meet us",
                className: "primary",
                callback: () => WA.openTab("https://play.staging.workadventu.re/@/tcm/workadventure/wa-village")
            }]
        }, {
            zone: "followUs",
            message: "Hey! Have you already started following us?",
            cta: [{
                label: "LinkedIn",
                className: "primary",
                callback: () => WA.openTab("https://www.linkedin.com/company/workadventu-re")
            }, {
                label: "Twitter",
                className: "primary",
                callback: () => WA.openTab("https://twitter.com/workadventure_")
            }]
        }];

        function i(e, t) {
            const o = r.find((t => t.zone == e));
            void 0 !== o && (n = WA.openPopup(t, o.message, o.cta))
        }

        function a() {
            void 0 !== typeof n && (n.close(), n = void 0)
        }
        WA.onEnterZone("needHelp", (() => {
            t = "needHelp", i(t, t + "Popup")
        })), WA.onEnterZone("followUs", (() => {
            t = "followUs", i(t, t + "Popup")
        })), WA.onLeaveZone("needHelp", a), WA.onLeaveZone("followUs", a)
    })()
})();
//# sourceMappingURL=script.js.map