"use strict";

document.addEventListener("DOMContentLoaded", function () {


    let $siteName = document.getElementById("site-name");
    let blogNameWidth = $siteName && $siteName.offsetWidth;
    let $menusEle = document.querySelector("#menus .menus_items");
    let menusWidth = $menusEle && $menusEle.offsetWidth;
    let $search = document.querySelector("#search-button");
    let searchWidth = $search && $search.offsetWidth;

    // 菜单栏调整
    function adjustMenu(init) {

        0 < arguments.length && void 0 !== init && init && (blogNameWidth = $siteName && $siteName.offsetWidth, menusWidth = $menusEle && $menusEle.offsetWidth, searchWidth = $search && $search.offsetWidth);
        const $nav = document.getElementById("nav");

        if (window.innerWidth < 768 || blogNameWidth + menusWidth + searchWidth > $nav.offsetWidth - 120) {
            $nav.classList.add("hide-menu")
        } else {
            $nav.classList.remove("hide-menu")
        }
    }

    function S() {
        var t = document.getElementById("card-toc"), r = t.getElementsByClassName("toc-content")[0],
            s = r.querySelectorAll(".toc-link"), c = document.getElementById("article-container");
        window.tocScrollFn = function () {
            return btf.throttle(function () {
                var t = window.scrollY || document.documentElement.scrollTop;
                e(t), i(t)
            }, 100)()
        };
        window.addEventListener("scroll", tocScrollFn);
        var e = function (t) {
            var e = c.clientHeight, n = document.documentElement.clientHeight,
                o = (t - c.offsetTop) / (n < e ? e - n : document.documentElement.scrollHeight - n),
                i = Math.round(100 * o), a = 100 < i ? 100 : i <= 0 ? 0 : i;
            r.setAttribute("progress-percentage", a)
        }, o = function () {
            t.style.animation = "toc-close .2s", setTimeout(function () {
                t.style.cssText = "opacity:''; animation: ''; right: ''"
            }, 100)
        };
        document.getElementById("mobile-toc-button").addEventListener("click", function () {
            ("0" === window.getComputedStyle(t).getPropertyValue("opacity") ? n : o)()
        });
        r.addEventListener("click", function (t) {
            t.preventDefault();
            var e = t.target.classList.contains("toc-link") ? t.target : t.target.parentElement;
            btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(e.getAttribute("href")).replace("#", ""))), 300), window.innerWidth < 900 && o()
        });
        var d = c.querySelectorAll("h1,h2,h3,h4,h5,h6"), u = "", i = function (n) {
            if (0 === s.length || 0 === n) return !1;
            var t, e, o = "", i = "";
            if (d.forEach(function (t, e) {
                n > btf.getEleTop(t) - 80 && (o = "#" + encodeURI(t.getAttribute("id")), i = e)
            }), u !== i) {
                if (l && (t = o, window.history.replaceState && t !== window.location.hash && (t = t || location.pathname, e = GLOBAL_CONFIG_SITE.title, window.history.replaceState({
                    url: location.href, title: e
                }, e, t))), "" === o) return r.querySelectorAll(".active").forEach(function (t) {
                    t.classList.remove("active")
                }), void (u = i);
                u = i, r.querySelectorAll(".active").forEach(function (t) {
                    t.classList.remove("active")
                });
                var a = s[i];
                a.classList.add("active"), setTimeout(function () {
                    var t, e;
                    t = a.getBoundingClientRect().top, e = r.scrollTop, t > document.documentElement.clientHeight - 100 && (r.scrollTop = e + 150), t < 100 && (r.scrollTop = e - 150)
                }, 0);
                for (var c = a.parentNode; !c.matches(".toc"); c = c.parentNode) c.matches("li") && c.classList.add("active")
            }
        }
    }

    var d = !1, n = function () {
        "light" == ("dark" === document.documentElement.getAttribute("data-theme") ? "dark" : "light") ? (activateDarkMode(), saveToLocal.set("theme", "dark", 2), void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night, !1, 2e3)) : (activateLightMode(), saveToLocal.set("theme", "light", 2), void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day, !1, 2e3)), "function" == typeof utterancesTheme && utterancesTheme(), "object" === ("undefined" == typeof FB ? "undefined" : _typeof(FB)) && window.loadFBComment(), window.DISQUS && document.getElementById("disqus_thread").children.length && setTimeout(function () {
            return window.disqusReset()
        }, 200)
    };

    function I(t) {
        t.forEach(function (t) {
            var e = t, n = e.getAttribute("datetime");
            e.innerText = btf.diffDate(n, !0), e.style.display = "inline"
        })
    }

    var g, O = function () {
        document.querySelectorAll("#article-container .tab > button").forEach(function (t) {
            t.addEventListener("click", function (t) {
                var e, n, o, i, a = this.parentNode;
                a.classList.contains("active") || (e = a.parentNode.nextElementSibling, (n = btf.siblings(a, ".active")[0]) && n.classList.remove("active"), a.classList.add("active"), o = this.getAttribute("data-href").replace("#", ""), _toConsumableArray(e.children).forEach(function (t) {
                    t.id === o ? t.classList.add("active") : t.classList.remove("active")
                }), 0 < (i = e.querySelectorAll("#".concat(o, " .justified-gallery"))).length && btf.initJustifiedGallery(i))
            })
        })
    }, G = function () {
        document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function (t) {
            t.addEventListener("click", function () {
                btf.scrollToDest(btf.getEleTop(btf.getParents(this, ".tabs")), 300)
            })
        })
    };
    window.refreshFn = function () {
        var t, e, n, o, i, a, c, r, s, l, d, u, f, m, h, g, y, p, b;

        function v() {
            f.style.overflow = "", f.style.paddingRight = "", btf.fadeOut(u, .5), d.classList.remove("open")
        }

        adjustMenu(), document.getElementById("nav").classList.add("show"), GLOBAL_CONFIG_SITE.isPost ? (GLOBAL_CONFIG_SITE.isToc && S(), void 0 !== GLOBAL_CONFIG.noticeOutdate && (r = GLOBAL_CONFIG.noticeOutdate, (s = btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate)) >= r.limitDay && ((a = document.createElement("div")).className = "post-outdate-notice", a.textContent = r.messagePrev + " " + s + " " + r.messageNext, c = document.getElementById("article-container"), "top" === r.position ? c.insertBefore(a, c.firstChild) : c.appendChild(a))), GLOBAL_CONFIG.relativeDate.post && I(document.querySelectorAll("#post-meta time"))) : (GLOBAL_CONFIG.relativeDate.homepage && I(document.querySelectorAll("#recent-posts time")), !GLOBAL_CONFIG.runtime || (i = document.getElementById("runtimeshow")) && (o = i.getAttribute("data-publishDate"), i.innerText = btf.diffDate(o) + " " + GLOBAL_CONFIG.runtime), (n = document.getElementById("last-push-date")) && (e = n.getAttribute("data-lastPushDate"), n.innerText = btf.diffDate(e, !0)), (t = document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i")).length && t.forEach(function (t) {
            t.addEventListener("click", function (t) {
                t.preventDefault();
                this.classList.toggle("expand");
                var e = this.parentNode.nextElementSibling;
                btf.isHidden(e) ? e.style.display = "block" : e.style.display = "none"
            })
        })), l = document.getElementById("toggle-menu"), d = document.getElementById("sidebar-menus"), u = document.getElementById("menu-mask"), f = document.body, l.addEventListener("click", function () {
            btf.sidebarPaddingR(), f.style.overflow = "hidden", btf.fadeIn(u, .5), d.classList.add("open")
        });
        window.addEventListener("resize", function (t) {
            btf.isHidden(l) && v()
        });

        w();

        "mediumZoom" === GLOBAL_CONFIG.lightbox && (h = mediumZoom(document.querySelectorAll("#article-container :not(a)>img"))).on("open", function (t) {
            var e = "dark" === document.documentElement.getAttribute("data-theme") ? "#121212" : "#fff";
            h.update({background: e})
        });

        (g = document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table")).length && g.forEach(function (t) {
            btf.wrap(t, "div", "", "table-wrap")
        });

        (y = document.querySelectorAll("#article-container .hide-button")).length && y.forEach(function (t) {
            t.addEventListener("click", function (t) {
                var e = this.nextElementSibling;
                this.classList.toggle("open"), this.classList.contains("open") && 0 < e.querySelectorAll(".justified-gallery").length && btf.initJustifiedGallery(e.querySelectorAll(".justified-gallery"))
            })
        });
        O();
        G();
        p = !1;
        (b = document.querySelector("#comment-switch > .switch-btn")) && b.addEventListener("click", function () {
            this.classList.toggle("move"), document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function (t) {
                btf.isHidden(t) ? t.style.cssText = "display: block;animation: tabshow .5s" : t.style.cssText = "display: none;animation: ''"
            });
            p || "function" != typeof loadOtherComment || (p = !0, loadOtherComment())
        });
    };
    refreshFn();


    window.addEventListener("resize", adjustMenu);
    window.addEventListener("orientationchange", function () {
        setTimeout(adjustMenu(!0), 100)
    });

    document.querySelectorAll("#sidebar-menus .expand").forEach(function (t) {
        t.addEventListener("click", function () {
            this.classList.toggle("hide");
            var t = this.parentNode.nextElementSibling;
            btf.isHidden(t) ? t.style.display = "block" : t.style.display = "none"
        })
    });
    window.addEventListener("touchmove", function (t) {
        document.querySelectorAll("#nav .menus_item_child").forEach(function (t) {
            btf.isHidden(t) || (t.style.display = "none")
        })
    });
});