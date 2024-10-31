(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/accordion/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/accordion/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukAccordion");
        context.setVariable("govukAccordion", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/accordion/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/accordion/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += "\n";
            env.getTemplate("../../macros/i18n.njk", false, "node_modules/govuk-frontend/dist/govuk/components/accordion/template.njk", false, function(t_6, t_5) {
              if (t_6) {
                cb(t_6);
                return;
              }
              t_5.getExported(function(t_7, t_52) {
                if (t_7) {
                  cb(t_7);
                  return;
                }
                if (Object.prototype.hasOwnProperty.call(t_52, "govukI18nAttributes")) {
                  var t_8 = t_52.govukI18nAttributes;
                } else {
                  cb(new Error("cannot import 'govukI18nAttributes'"));
                  return;
                }
                context.setVariable("govukI18nAttributes", t_8);
                var macro_t_9 = runtime.makeMacro(
                  ["params", "item", "index"],
                  [],
                  function(l_params, l_item, l_index, kwargs) {
                    var callerFrame = frame;
                    frame = new runtime.Frame();
                    kwargs = kwargs || {};
                    if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
                      frame.set("caller", kwargs.caller);
                    }
                    frame.set("params", l_params);
                    frame.set("item", l_item);
                    frame.set("index", l_index);
                    var t_10 = "";
                    var t_11;
                    t_11 = runtime.memberLookup(l_params, "headingLevel") ? runtime.memberLookup(l_params, "headingLevel") : 2;
                    frame.set("headingLevel", t_11, true);
                    if (frame.topLevel) {
                      context.setVariable("headingLevel", t_11);
                    }
                    if (frame.topLevel) {
                      context.addExport("headingLevel", t_11);
                    }
                    t_10 += '\n  <div class="govuk-accordion__section';
                    if (runtime.memberLookup(l_item, "expanded")) {
                      t_10 += " govuk-accordion__section--expanded";
                      ;
                    }
                    t_10 += '">\n    <div class="govuk-accordion__section-header">\n      <h';
                    t_10 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "headingLevel"), env.opts.autoescape);
                    t_10 += ' class="govuk-accordion__section-heading">\n        <span class="govuk-accordion__section-button" id="';
                    t_10 += runtime.suppressValue(runtime.memberLookup(l_params, "id"), env.opts.autoescape);
                    t_10 += "-heading-";
                    t_10 += runtime.suppressValue(l_index, env.opts.autoescape);
                    t_10 += '">\n          ';
                    t_10 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(l_item, "heading"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(l_item, "heading"), "html"))), 8) : runtime.memberLookup(runtime.memberLookup(l_item, "heading"), "text"), env.opts.autoescape);
                    t_10 += "\n        </span>\n      </h";
                    t_10 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "headingLevel"), env.opts.autoescape);
                    t_10 += ">\n      ";
                    if (runtime.memberLookup(runtime.memberLookup(l_item, "summary"), "html") || runtime.memberLookup(runtime.memberLookup(l_item, "summary"), "text")) {
                      t_10 += '\n      <div class="govuk-accordion__section-summary govuk-body" id="';
                      t_10 += runtime.suppressValue(runtime.memberLookup(l_params, "id"), env.opts.autoescape);
                      t_10 += "-summary-";
                      t_10 += runtime.suppressValue(l_index, env.opts.autoescape);
                      t_10 += '">\n        ';
                      t_10 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(l_item, "summary"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(l_item, "summary"), "html"))), 8) : runtime.memberLookup(runtime.memberLookup(l_item, "summary"), "text"), env.opts.autoescape);
                      t_10 += "\n      </div>\n      ";
                      ;
                    }
                    t_10 += '\n    </div>\n    <div id="';
                    t_10 += runtime.suppressValue(runtime.memberLookup(l_params, "id"), env.opts.autoescape);
                    t_10 += "-content-";
                    t_10 += runtime.suppressValue(l_index, env.opts.autoescape);
                    t_10 += '" class="govuk-accordion__section-content">\n    ';
                    if (runtime.memberLookup(runtime.memberLookup(l_item, "content"), "html")) {
                      t_10 += "\n      ";
                      t_10 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(l_item, "content"), "html"))), 6), env.opts.autoescape);
                      t_10 += "\n    ";
                      ;
                    } else {
                      if (runtime.memberLookup(runtime.memberLookup(l_item, "content"), "text")) {
                        t_10 += '\n      <p class="govuk-body">\n        ';
                        t_10 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, runtime.memberLookup(runtime.memberLookup(l_item, "content"), "text")), 8), env.opts.autoescape);
                        t_10 += "\n      </p>\n    ";
                        ;
                      }
                      ;
                    }
                    t_10 += "\n    </div>\n  </div>\n";
                    ;
                    frame = callerFrame;
                    return new runtime.SafeString(t_10);
                  }
                );
                context.setVariable("_accordionItem", macro_t_9);
                output += '<div class="govuk-accordion';
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
                  output += " ";
                  output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
                  ;
                }
                output += '" data-module="govuk-accordion" id="';
                output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id"), env.opts.autoescape);
                output += '"';
                output += runtime.suppressValue((lineno = 31, colno = 25, runtime.callWrap(t_8, "govukI18nAttributes", context, [{ "key": "hide-all-sections", "message": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hideAllSectionsText") }])), env.opts.autoescape);
                output += runtime.suppressValue((lineno = 36, colno = 25, runtime.callWrap(t_8, "govukI18nAttributes", context, [{ "key": "hide-section", "message": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hideSectionText") }])), env.opts.autoescape);
                output += runtime.suppressValue((lineno = 41, colno = 25, runtime.callWrap(t_8, "govukI18nAttributes", context, [{ "key": "hide-section-aria-label", "message": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hideSectionAriaLabelText") }])), env.opts.autoescape);
                output += runtime.suppressValue((lineno = 46, colno = 25, runtime.callWrap(t_8, "govukI18nAttributes", context, [{ "key": "show-all-sections", "message": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "showAllSectionsText") }])), env.opts.autoescape);
                output += runtime.suppressValue((lineno = 51, colno = 25, runtime.callWrap(t_8, "govukI18nAttributes", context, [{ "key": "show-section", "message": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "showSectionText") }])), env.opts.autoescape);
                output += runtime.suppressValue((lineno = 56, colno = 25, runtime.callWrap(t_8, "govukI18nAttributes", context, [{ "key": "show-section-aria-label", "message": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "showSectionAriaLabelText") }])), env.opts.autoescape);
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "rememberExpanded") !== runtime.contextOrFrameLookup(context, frame, "undefined")) {
                  output += ' data-remember-expanded="';
                  output += runtime.suppressValue(env.getFilter("escape").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "rememberExpanded")), env.opts.autoescape);
                  output += '"';
                  ;
                }
                output += runtime.suppressValue((lineno = 62, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
                output += ">\n  ";
                frame = frame.push();
                var t_14 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "items");
                if (t_14) {
                  t_14 = runtime.fromIterator(t_14);
                  var t_13 = t_14.length;
                  for (var t_122 = 0; t_122 < t_14.length; t_122++) {
                    var t_15 = t_14[t_122];
                    frame.set("item", t_15);
                    frame.set("loop.index", t_122 + 1);
                    frame.set("loop.index0", t_122);
                    frame.set("loop.revindex", t_13 - t_122);
                    frame.set("loop.revindex0", t_13 - t_122 - 1);
                    frame.set("loop.first", t_122 === 0);
                    frame.set("loop.last", t_122 === t_13 - 1);
                    frame.set("loop.length", t_13);
                    output += "\n    ";
                    if (t_15) {
                      output += runtime.suppressValue((lineno = 64, colno = 34, runtime.callWrap(macro_t_9, "_accordionItem", context, [runtime.contextOrFrameLookup(context, frame, "params"), t_15, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "loop"), "index")])), env.opts.autoescape);
                      ;
                    }
                    output += "\n  ";
                    ;
                  }
                }
                frame = frame.pop();
                output += "\n</div>\n";
                if (parentTemplate) {
                  parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
                } else {
                  cb(null, output);
                }
              });
            });
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/back-link/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/back-link/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukBackLink");
        context.setVariable("govukBackLink", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/back-link/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/back-link/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += '<a href="';
            output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "href"), "#", true), env.opts.autoescape);
            output += '" class="govuk-back-link';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
              output += " ";
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
              ;
            }
            output += '"';
            output += runtime.suppressValue((lineno = 3, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
            output += ">";
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html") ? env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html")) : env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text"), "Back", true), env.opts.autoescape);
            output += "</a>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/breadcrumbs/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/breadcrumbs/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukBreadcrumbs");
        context.setVariable("govukBreadcrumbs", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/breadcrumbs/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/breadcrumbs/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            var t_5;
            t_5 = "govuk-breadcrumbs";
            frame.set("classNames", t_5, true);
            if (frame.topLevel) {
              context.setVariable("classNames", t_5);
            }
            if (frame.topLevel) {
              context.addExport("classNames", t_5);
            }
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
              output += "\n  ";
              var t_6;
              t_6 = runtime.contextOrFrameLookup(context, frame, "classNames") + " " + runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes");
              frame.set("classNames", t_6, true);
              if (frame.topLevel) {
                context.setVariable("classNames", t_6);
              }
              if (frame.topLevel) {
                context.addExport("classNames", t_6);
              }
              output += "\n";
              ;
            }
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "collapseOnMobile")) {
              output += "\n  ";
              var t_7;
              t_7 = runtime.contextOrFrameLookup(context, frame, "classNames") + " govuk-breadcrumbs--collapse-on-mobile";
              frame.set("classNames", t_7, true);
              if (frame.topLevel) {
                context.setVariable("classNames", t_7);
              }
              if (frame.topLevel) {
                context.addExport("classNames", t_7);
              }
              output += "\n";
              ;
            }
            output += '<nav class="';
            output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "classNames"), env.opts.autoescape);
            output += '"';
            output += runtime.suppressValue((lineno = 13, colno = 49, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
            output += ' aria-label="';
            output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "labelText"), "Breadcrumb"), env.opts.autoescape);
            output += '">\n  <ol class="govuk-breadcrumbs__list">\n';
            frame = frame.push();
            var t_10 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "items");
            if (t_10) {
              t_10 = runtime.fromIterator(t_10);
              var t_9 = t_10.length;
              for (var t_8 = 0; t_8 < t_10.length; t_8++) {
                var t_11 = t_10[t_8];
                frame.set("item", t_11);
                frame.set("loop.index", t_8 + 1);
                frame.set("loop.index0", t_8);
                frame.set("loop.revindex", t_9 - t_8);
                frame.set("loop.revindex0", t_9 - t_8 - 1);
                frame.set("loop.first", t_8 === 0);
                frame.set("loop.last", t_8 === t_9 - 1);
                frame.set("loop.length", t_9);
                output += "\n  ";
                if (runtime.memberLookup(t_11, "href")) {
                  output += '\n    <li class="govuk-breadcrumbs__list-item">\n      <a class="govuk-breadcrumbs__link" href="';
                  output += runtime.suppressValue(runtime.memberLookup(t_11, "href"), env.opts.autoescape);
                  output += '"';
                  output += runtime.suppressValue((lineno = 18, colno = 83, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(t_11, "attributes")])), env.opts.autoescape);
                  output += ">";
                  output += runtime.suppressValue(runtime.memberLookup(t_11, "html") ? env.getFilter("safe").call(context, runtime.memberLookup(t_11, "html")) : runtime.memberLookup(t_11, "text"), env.opts.autoescape);
                  output += "</a>\n    </li>\n  ";
                  ;
                } else {
                  output += '\n    <li class="govuk-breadcrumbs__list-item" aria-current="page">';
                  output += runtime.suppressValue(runtime.memberLookup(t_11, "html") ? env.getFilter("safe").call(context, runtime.memberLookup(t_11, "html")) : runtime.memberLookup(t_11, "text"), env.opts.autoescape);
                  output += "</li>\n  ";
                  ;
                }
                output += "\n";
                ;
              }
            }
            frame = frame.pop();
            output += "\n  </ol>\n</nav>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/button/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/button/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukButton");
        context.setVariable("govukButton", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/button/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/button/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            var t_5;
            t_5 = "govuk-button";
            frame.set("classNames", t_5, true);
            if (frame.topLevel) {
              context.setVariable("classNames", t_5);
            }
            if (frame.topLevel) {
              context.addExport("classNames", t_5);
            }
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
              output += "\n  ";
              var t_6;
              t_6 = runtime.contextOrFrameLookup(context, frame, "classNames") + " " + runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes");
              frame.set("classNames", t_6, true);
              if (frame.topLevel) {
                context.setVariable("classNames", t_6);
              }
              if (frame.topLevel) {
                context.addExport("classNames", t_6);
              }
              output += "\n";
              ;
            }
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "isStartButton")) {
              output += "\n  ";
              var t_7;
              t_7 = runtime.contextOrFrameLookup(context, frame, "classNames") + " govuk-button--start";
              frame.set("classNames", t_7, true);
              if (frame.topLevel) {
                context.setVariable("classNames", t_7);
              }
              if (frame.topLevel) {
                context.addExport("classNames", t_7);
              }
              output += "\n";
              ;
            }
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "element")) {
              output += "\n  ";
              var t_8;
              t_8 = env.getFilter("lower").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "element"));
              frame.set("element", t_8, true);
              if (frame.topLevel) {
                context.setVariable("element", t_8);
              }
              if (frame.topLevel) {
                context.addExport("element", t_8);
              }
              output += "\n";
              ;
            } else {
              output += "\n  ";
              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "href")) {
                output += "\n    ";
                var t_9;
                t_9 = "a";
                frame.set("element", t_9, true);
                if (frame.topLevel) {
                  context.setVariable("element", t_9);
                }
                if (frame.topLevel) {
                  context.addExport("element", t_9);
                }
                output += "\n  ";
                ;
              } else {
                output += "\n    ";
                var t_10;
                t_10 = "button";
                frame.set("element", t_10, true);
                if (frame.topLevel) {
                  context.setVariable("element", t_10);
                }
                if (frame.topLevel) {
                  context.addExport("element", t_10);
                }
                output += "\n  ";
                ;
              }
              output += "\n";
              ;
            }
            var macro_t_11 = runtime.makeMacro(
              [],
              [],
              function(kwargs) {
                var callerFrame = frame;
                frame = new runtime.Frame();
                kwargs = kwargs || {};
                if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
                  frame.set("caller", kwargs.caller);
                }
                var t_122 = "";
                t_122 += '\n  <svg class="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false">\n    <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/>\n  </svg>';
                ;
                frame = callerFrame;
                return new runtime.SafeString(t_122);
              }
            );
            context.setVariable("_startIcon", macro_t_11);
            var t_13;
            t_13 = function() {
              var output2 = "";
              output2 += ' class="';
              output2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "classNames"), env.opts.autoescape);
              output2 += '" data-module="govuk-button"';
              output2 += runtime.suppressValue((lineno = 35, colno = 99, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id")) {
                output2 += ' id="';
                output2 += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id"), env.opts.autoescape);
                output2 += '"';
                ;
              }
              ;
              return output2;
            }();
            frame.set("commonAttributes", t_13, true);
            if (frame.topLevel) {
              context.setVariable("commonAttributes", t_13);
            }
            if (frame.topLevel) {
              context.addExport("commonAttributes", t_13);
            }
            var t_14;
            t_14 = function() {
              var output2 = "";
              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "name")) {
                output2 += ' name="';
                output2 += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "name"), env.opts.autoescape);
                output2 += '"';
                ;
              }
              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "disabled")) {
                output2 += ' disabled aria-disabled="true"';
                ;
              }
              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "preventDoubleClick") !== runtime.contextOrFrameLookup(context, frame, "undefined")) {
                output2 += ' data-prevent-double-click="';
                output2 += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "preventDoubleClick"), env.opts.autoescape);
                output2 += '"';
                ;
              }
              ;
              return output2;
            }();
            frame.set("buttonAttributes", t_14, true);
            if (frame.topLevel) {
              context.setVariable("buttonAttributes", t_14);
            }
            if (frame.topLevel) {
              context.addExport("buttonAttributes", t_14);
            }
            if (runtime.contextOrFrameLookup(context, frame, "element") == "a") {
              output += '\n<a href="';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "href") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "href") : "#", env.opts.autoescape);
              output += '" role="button" draggable="false"';
              output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "commonAttributes")), env.opts.autoescape);
              output += ">\n  ";
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html"))), 2) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text"), env.opts.autoescape);
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "isStartButton") ? env.getFilter("safe").call(context, (lineno = 46, colno = 16, runtime.callWrap(macro_t_11, "_startIcon", context, []))) : "", env.opts.autoescape);
              output += "\n</a>";
              ;
            } else {
              if (runtime.contextOrFrameLookup(context, frame, "element") == "button") {
                output += "\n<button";
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "value")) {
                  output += ' value="';
                  output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "value"), env.opts.autoescape);
                  output += '"';
                  ;
                }
                output += ' type="';
                output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "type") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "type") : "submit", env.opts.autoescape);
                output += '"';
                output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "buttonAttributes")), env.opts.autoescape);
                output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "commonAttributes")), env.opts.autoescape);
                output += ">\n  ";
                output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html"))), 2) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text"), env.opts.autoescape);
                output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "isStartButton") ? env.getFilter("safe").call(context, (lineno = 52, colno = 16, runtime.callWrap(macro_t_11, "_startIcon", context, []))) : "", env.opts.autoescape);
                output += "\n</button>";
                ;
              } else {
                if (runtime.contextOrFrameLookup(context, frame, "element") == "input") {
                  output += '\n<input value="';
                  output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text"), env.opts.autoescape);
                  output += '" type="';
                  output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "type") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "type") : "submit", env.opts.autoescape);
                  output += '"';
                  output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "buttonAttributes")), env.opts.autoescape);
                  output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "commonAttributes")), env.opts.autoescape);
                  output += ">";
                  ;
                }
                ;
              }
              ;
            }
            output += "\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/character-count/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/character-count/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukCharacterCount");
        context.setVariable("govukCharacterCount", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/character-count/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/character-count/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += "\n";
            env.getTemplate("../../macros/i18n.njk", false, "node_modules/govuk-frontend/dist/govuk/components/character-count/template.njk", false, function(t_6, t_5) {
              if (t_6) {
                cb(t_6);
                return;
              }
              t_5.getExported(function(t_7, t_52) {
                if (t_7) {
                  cb(t_7);
                  return;
                }
                if (Object.prototype.hasOwnProperty.call(t_52, "govukI18nAttributes")) {
                  var t_8 = t_52.govukI18nAttributes;
                } else {
                  cb(new Error("cannot import 'govukI18nAttributes'"));
                  return;
                }
                context.setVariable("govukI18nAttributes", t_8);
                output += "\n";
                env.getTemplate("../textarea/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/character-count/template.njk", false, function(t_10, t_9) {
                  if (t_10) {
                    cb(t_10);
                    return;
                  }
                  t_9.getExported(function(t_11, t_92) {
                    if (t_11) {
                      cb(t_11);
                      return;
                    }
                    if (Object.prototype.hasOwnProperty.call(t_92, "govukTextarea")) {
                      var t_122 = t_92.govukTextarea;
                    } else {
                      cb(new Error("cannot import 'govukTextarea'"));
                      return;
                    }
                    context.setVariable("govukTextarea", t_122);
                    output += "\n";
                    env.getTemplate("../hint/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/character-count/template.njk", false, function(t_14, t_13) {
                      if (t_14) {
                        cb(t_14);
                        return;
                      }
                      t_13.getExported(function(t_15, t_132) {
                        if (t_15) {
                          cb(t_15);
                          return;
                        }
                        if (Object.prototype.hasOwnProperty.call(t_132, "govukHint")) {
                          var t_16 = t_132.govukHint;
                        } else {
                          cb(new Error("cannot import 'govukHint'"));
                          return;
                        }
                        context.setVariable("govukHint", t_16);
                        var t_17;
                        t_17 = !runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "maxwords") && !runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "maxlength");
                        frame.set("hasNoLimit", t_17, true);
                        if (frame.topLevel) {
                          context.setVariable("hasNoLimit", t_17);
                        }
                        if (frame.topLevel) {
                          context.addExport("hasNoLimit", t_17);
                        }
                        var t_18;
                        t_18 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "maxwords") || runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "maxlength");
                        frame.set("textareaDescriptionLength", t_18, true);
                        if (frame.topLevel) {
                          context.setVariable("textareaDescriptionLength", t_18);
                        }
                        if (frame.topLevel) {
                          context.addExport("textareaDescriptionLength", t_18);
                        }
                        var t_19;
                        t_19 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "textareaDescriptionText") || "You can enter up to %{count} " + (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "maxwords") ? "words" : "characters");
                        frame.set("textareaDescriptionText", t_19, true);
                        if (frame.topLevel) {
                          context.setVariable("textareaDescriptionText", t_19);
                        }
                        if (frame.topLevel) {
                          context.addExport("textareaDescriptionText", t_19);
                        }
                        var t_20;
                        t_20 = !runtime.contextOrFrameLookup(context, frame, "hasNoLimit") ? env.getFilter("replace").call(context, runtime.contextOrFrameLookup(context, frame, "textareaDescriptionText"), "%{count}", runtime.contextOrFrameLookup(context, frame, "textareaDescriptionLength")) : "";
                        frame.set("textareaDescriptionTextNoLimit", t_20, true);
                        if (frame.topLevel) {
                          context.setVariable("textareaDescriptionTextNoLimit", t_20);
                        }
                        if (frame.topLevel) {
                          context.addExport("textareaDescriptionTextNoLimit", t_20);
                        }
                        var t_21;
                        t_21 = function() {
                          var output2 = "";
                          output2 += "\n";
                          output2 += runtime.suppressValue(env.getFilter("trim").call(context, (lineno = 16, colno = 12, runtime.callWrap(t_16, "govukHint", context, [{ "text": runtime.contextOrFrameLookup(context, frame, "textareaDescriptionTextNoLimit"), "id": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id") + "-info", "classes": "govuk-character-count__message" + (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "countMessage"), "classes") ? " " + runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "countMessage"), "classes") : "") }]))), env.opts.autoescape);
                          output2 += "\n";
                          if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput")) {
                            output2 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput"), "html") ? env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput"), "html"))) : runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput"), "text"), env.opts.autoescape);
                            output2 += "\n";
                            ;
                          }
                          ;
                          return output2;
                        }();
                        frame.set("countMessageHtml", t_21, true);
                        if (frame.topLevel) {
                          context.setVariable("countMessageHtml", t_21);
                        }
                        if (frame.topLevel) {
                          context.addExport("countMessageHtml", t_21);
                        }
                        var t_22;
                        t_22 = function() {
                          var output2 = "";
                          output2 += runtime.suppressValue((lineno = 27, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [{ "data-module": "govuk-character-count", "data-maxlength": { "value": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "maxlength"), "optional": true }, "data-threshold": { "value": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "threshold"), "optional": true }, "data-maxwords": { "value": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "maxwords"), "optional": true } }])), env.opts.autoescape);
                          if (runtime.contextOrFrameLookup(context, frame, "hasNoLimit") && runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "textareaDescriptionText")) {
                            output2 += runtime.suppressValue((lineno = 50, colno = 27, runtime.callWrap(t_8, "govukI18nAttributes", context, [{ "key": "textarea-description", "messages": { "other": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "textareaDescriptionText") } }])), env.opts.autoescape);
                            ;
                          }
                          output2 += runtime.suppressValue((lineno = 56, colno = 25, runtime.callWrap(t_8, "govukI18nAttributes", context, [{ "key": "characters-under-limit", "messages": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "charactersUnderLimitText") }])), env.opts.autoescape);
                          output2 += runtime.suppressValue((lineno = 61, colno = 25, runtime.callWrap(t_8, "govukI18nAttributes", context, [{ "key": "characters-at-limit", "message": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "charactersAtLimitText") }])), env.opts.autoescape);
                          output2 += runtime.suppressValue((lineno = 66, colno = 25, runtime.callWrap(t_8, "govukI18nAttributes", context, [{ "key": "characters-over-limit", "messages": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "charactersOverLimitText") }])), env.opts.autoescape);
                          output2 += runtime.suppressValue((lineno = 71, colno = 25, runtime.callWrap(t_8, "govukI18nAttributes", context, [{ "key": "words-under-limit", "messages": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "wordsUnderLimitText") }])), env.opts.autoescape);
                          output2 += runtime.suppressValue((lineno = 76, colno = 25, runtime.callWrap(t_8, "govukI18nAttributes", context, [{ "key": "words-at-limit", "message": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "wordsAtLimitText") }])), env.opts.autoescape);
                          output2 += runtime.suppressValue((lineno = 81, colno = 25, runtime.callWrap(t_8, "govukI18nAttributes", context, [{ "key": "words-over-limit", "messages": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "wordsOverLimitText") }])), env.opts.autoescape);
                          ;
                          return output2;
                        }();
                        frame.set("attributesHtml", t_22, true);
                        if (frame.topLevel) {
                          context.setVariable("attributesHtml", t_22);
                        }
                        if (frame.topLevel) {
                          context.addExport("attributesHtml", t_22);
                        }
                        frame = frame.push();
                        var t_25 = runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "attributes");
                        if (t_25) {
                          t_25 = runtime.fromIterator(t_25);
                          var t_23;
                          if (runtime.isArray(t_25)) {
                            var t_24 = t_25.length;
                            for (t_23 = 0; t_23 < t_25.length; t_23++) {
                              var t_26 = t_25[t_23][0];
                              frame.set("[object Object]", t_25[t_23][0]);
                              var t_27 = t_25[t_23][1];
                              frame.set("[object Object]", t_25[t_23][1]);
                              frame.set("loop.index", t_23 + 1);
                              frame.set("loop.index0", t_23);
                              frame.set("loop.revindex", t_24 - t_23);
                              frame.set("loop.revindex0", t_24 - t_23 - 1);
                              frame.set("loop.first", t_23 === 0);
                              frame.set("loop.last", t_23 === t_24 - 1);
                              frame.set("loop.length", t_24);
                              output += "\n  ";
                              var t_28;
                              t_28 = runtime.contextOrFrameLookup(context, frame, "attributesHtml") + " " + env.getFilter("escape").call(context, t_26) + '="' + env.getFilter("escape").call(context, t_27) + '"';
                              frame.set("attributesHtml", t_28, true);
                              if (frame.topLevel) {
                                context.setVariable("attributesHtml", t_28);
                              }
                              if (frame.topLevel) {
                                context.addExport("attributesHtml", t_28);
                              }
                              output += "\n";
                              ;
                            }
                          } else {
                            t_23 = -1;
                            var t_24 = runtime.keys(t_25).length;
                            for (var t_29 in t_25) {
                              t_23++;
                              var t_30 = t_25[t_29];
                              frame.set("name", t_29);
                              frame.set("value", t_30);
                              frame.set("loop.index", t_23 + 1);
                              frame.set("loop.index0", t_23);
                              frame.set("loop.revindex", t_24 - t_23);
                              frame.set("loop.revindex0", t_24 - t_23 - 1);
                              frame.set("loop.first", t_23 === 0);
                              frame.set("loop.last", t_23 === t_24 - 1);
                              frame.set("loop.length", t_24);
                              output += "\n  ";
                              var t_31;
                              t_31 = runtime.contextOrFrameLookup(context, frame, "attributesHtml") + " " + env.getFilter("escape").call(context, t_29) + '="' + env.getFilter("escape").call(context, t_30) + '"';
                              frame.set("attributesHtml", t_31, true);
                              if (frame.topLevel) {
                                context.setVariable("attributesHtml", t_31);
                              }
                              if (frame.topLevel) {
                                context.addExport("attributesHtml", t_31);
                              }
                              output += "\n";
                              ;
                            }
                          }
                        }
                        frame = frame.pop();
                        output += runtime.suppressValue(env.getFilter("trim").call(context, (lineno = 92, colno = 16, runtime.callWrap(t_122, "govukTextarea", context, [{ "id": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id"), "name": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "name"), "describedBy": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id") + "-info", "rows": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "rows"), "spellcheck": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "spellcheck"), "value": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "value"), "formGroup": { "classes": "govuk-character-count" + (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "classes") ? " " + runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "classes") : ""), "attributes": runtime.contextOrFrameLookup(context, frame, "attributesHtml"), "beforeInput": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInput"), "afterInput": { "html": runtime.contextOrFrameLookup(context, frame, "countMessageHtml") } }, "classes": "govuk-js-character-count" + (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes") ? " " + runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes") : ""), "label": { "html": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "html"), "text": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "text"), "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "classes"), "isPageHeading": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "isPageHeading"), "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "attributes"), "for": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id") }, "hint": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "errorMessage": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "attributes": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes") }]))), env.opts.autoescape);
                        output += "\n";
                        if (parentTemplate) {
                          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
                        } else {
                          cb(null, output);
                        }
                      });
                    });
                  });
                });
              });
            });
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/checkboxes/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/checkboxes/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukCheckboxes");
        context.setVariable("govukCheckboxes", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/checkboxes/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/checkboxes/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += "\n";
            env.getTemplate("../error-message/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/checkboxes/template.njk", false, function(t_6, t_5) {
              if (t_6) {
                cb(t_6);
                return;
              }
              t_5.getExported(function(t_7, t_52) {
                if (t_7) {
                  cb(t_7);
                  return;
                }
                if (Object.prototype.hasOwnProperty.call(t_52, "govukErrorMessage")) {
                  var t_8 = t_52.govukErrorMessage;
                } else {
                  cb(new Error("cannot import 'govukErrorMessage'"));
                  return;
                }
                context.setVariable("govukErrorMessage", t_8);
                output += "\n";
                env.getTemplate("../fieldset/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/checkboxes/template.njk", false, function(t_10, t_9) {
                  if (t_10) {
                    cb(t_10);
                    return;
                  }
                  t_9.getExported(function(t_11, t_92) {
                    if (t_11) {
                      cb(t_11);
                      return;
                    }
                    if (Object.prototype.hasOwnProperty.call(t_92, "govukFieldset")) {
                      var t_122 = t_92.govukFieldset;
                    } else {
                      cb(new Error("cannot import 'govukFieldset'"));
                      return;
                    }
                    context.setVariable("govukFieldset", t_122);
                    output += "\n";
                    env.getTemplate("../hint/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/checkboxes/template.njk", false, function(t_14, t_13) {
                      if (t_14) {
                        cb(t_14);
                        return;
                      }
                      t_13.getExported(function(t_15, t_132) {
                        if (t_15) {
                          cb(t_15);
                          return;
                        }
                        if (Object.prototype.hasOwnProperty.call(t_132, "govukHint")) {
                          var t_16 = t_132.govukHint;
                        } else {
                          cb(new Error("cannot import 'govukHint'"));
                          return;
                        }
                        context.setVariable("govukHint", t_16);
                        output += "\n";
                        env.getTemplate("../label/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/checkboxes/template.njk", false, function(t_18, t_17) {
                          if (t_18) {
                            cb(t_18);
                            return;
                          }
                          t_17.getExported(function(t_19, t_172) {
                            if (t_19) {
                              cb(t_19);
                              return;
                            }
                            if (Object.prototype.hasOwnProperty.call(t_172, "govukLabel")) {
                              var t_20 = t_172.govukLabel;
                            } else {
                              cb(new Error("cannot import 'govukLabel'"));
                              return;
                            }
                            context.setVariable("govukLabel", t_20);
                            var t_21;
                            t_21 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "idPrefix") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "idPrefix") : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "name");
                            frame.set("idPrefix", t_21, true);
                            if (frame.topLevel) {
                              context.setVariable("idPrefix", t_21);
                            }
                            if (frame.topLevel) {
                              context.addExport("idPrefix", t_21);
                            }
                            var t_22;
                            t_22 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "describedBy") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "describedBy") : "";
                            frame.set("describedBy", t_22, true);
                            if (frame.topLevel) {
                              context.setVariable("describedBy", t_22);
                            }
                            if (frame.topLevel) {
                              context.addExport("describedBy", t_22);
                            }
                            output += "\n";
                            if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "fieldset"), "describedBy")) {
                              output += "\n  ";
                              var t_23;
                              t_23 = runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "fieldset"), "describedBy");
                              frame.set("describedBy", t_23, true);
                              if (frame.topLevel) {
                                context.setVariable("describedBy", t_23);
                              }
                              if (frame.topLevel) {
                                context.addExport("describedBy", t_23);
                              }
                              output += "\n";
                              ;
                            }
                            var t_24;
                            t_24 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "fieldset") ? true : false;
                            frame.set("hasFieldset", t_24, true);
                            if (frame.topLevel) {
                              context.setVariable("hasFieldset", t_24);
                            }
                            if (frame.topLevel) {
                              context.addExport("hasFieldset", t_24);
                            }
                            var macro_t_25 = runtime.makeMacro(
                              ["params", "item", "index"],
                              [],
                              function(l_params, l_item, l_index, kwargs) {
                                var callerFrame = frame;
                                frame = new runtime.Frame();
                                kwargs = kwargs || {};
                                if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
                                  frame.set("caller", kwargs.caller);
                                }
                                frame.set("params", l_params);
                                frame.set("item", l_item);
                                frame.set("index", l_index);
                                var t_26 = "";
                                var t_27;
                                t_27 = runtime.memberLookup(l_item, "id") ? runtime.memberLookup(l_item, "id") : runtime.contextOrFrameLookup(context, frame, "idPrefix") + (l_index > 1 ? "-" + l_index : "");
                                frame.set("itemId", t_27, true);
                                if (frame.topLevel) {
                                  context.setVariable("itemId", t_27);
                                }
                                if (frame.topLevel) {
                                  context.addExport("itemId", t_27);
                                }
                                t_26 += "\n  ";
                                var t_28;
                                t_28 = runtime.memberLookup(l_item, "name") ? runtime.memberLookup(l_item, "name") : runtime.memberLookup(l_params, "name");
                                frame.set("itemName", t_28, true);
                                if (frame.topLevel) {
                                  context.setVariable("itemName", t_28);
                                }
                                if (frame.topLevel) {
                                  context.addExport("itemName", t_28);
                                }
                                t_26 += "\n  ";
                                var t_29;
                                t_29 = "conditional-" + runtime.contextOrFrameLookup(context, frame, "itemId");
                                frame.set("conditionalId", t_29, true);
                                if (frame.topLevel) {
                                  context.setVariable("conditionalId", t_29);
                                }
                                if (frame.topLevel) {
                                  context.addExport("conditionalId", t_29);
                                }
                                if (runtime.memberLookup(l_item, "divider")) {
                                  t_26 += '\n    <div class="govuk-checkboxes__divider">';
                                  t_26 += runtime.suppressValue(runtime.memberLookup(l_item, "divider"), env.opts.autoescape);
                                  t_26 += "</div>\n  ";
                                  ;
                                } else {
                                  t_26 += "\n    ";
                                  var t_30;
                                  t_30 = env.getFilter("default").call(context, runtime.memberLookup(l_item, "checked"), runtime.memberLookup(l_params, "values") ? runtime.inOperator(runtime.memberLookup(l_item, "value"), runtime.memberLookup(l_params, "values")) && runtime.memberLookup(l_item, "checked") != false : false, true);
                                  frame.set("isChecked", t_30, true);
                                  if (frame.topLevel) {
                                    context.setVariable("isChecked", t_30);
                                  }
                                  if (frame.topLevel) {
                                    context.addExport("isChecked", t_30);
                                  }
                                  t_26 += "\n    ";
                                  var t_31;
                                  t_31 = runtime.memberLookup(runtime.memberLookup(l_item, "hint"), "text") || runtime.memberLookup(runtime.memberLookup(l_item, "hint"), "html") ? true : "";
                                  frame.set("hasHint", t_31, true);
                                  if (frame.topLevel) {
                                    context.setVariable("hasHint", t_31);
                                  }
                                  if (frame.topLevel) {
                                    context.addExport("hasHint", t_31);
                                  }
                                  t_26 += "\n    ";
                                  var t_32;
                                  t_32 = runtime.contextOrFrameLookup(context, frame, "hasHint") ? runtime.contextOrFrameLookup(context, frame, "itemId") + "-item-hint" : "";
                                  frame.set("itemHintId", t_32, true);
                                  if (frame.topLevel) {
                                    context.setVariable("itemHintId", t_32);
                                  }
                                  if (frame.topLevel) {
                                    context.addExport("itemHintId", t_32);
                                  }
                                  t_26 += "\n    ";
                                  var t_33;
                                  t_33 = !runtime.contextOrFrameLookup(context, frame, "hasFieldset") ? runtime.contextOrFrameLookup(context, frame, "describedBy") : "";
                                  frame.set("itemDescribedBy", t_33, true);
                                  if (frame.topLevel) {
                                    context.setVariable("itemDescribedBy", t_33);
                                  }
                                  if (frame.topLevel) {
                                    context.addExport("itemDescribedBy", t_33);
                                  }
                                  t_26 += "\n    ";
                                  var t_34;
                                  t_34 = env.getFilter("trim").call(context, runtime.contextOrFrameLookup(context, frame, "itemDescribedBy") + " " + runtime.contextOrFrameLookup(context, frame, "itemHintId"));
                                  frame.set("itemDescribedBy", t_34, true);
                                  if (frame.topLevel) {
                                    context.setVariable("itemDescribedBy", t_34);
                                  }
                                  if (frame.topLevel) {
                                    context.addExport("itemDescribedBy", t_34);
                                  }
                                  t_26 += '\n    <div class="govuk-checkboxes__item">\n      <input class="govuk-checkboxes__input" id="';
                                  t_26 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "itemId"), env.opts.autoescape);
                                  t_26 += '" name="';
                                  t_26 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "itemName"), env.opts.autoescape);
                                  t_26 += '" type="checkbox" value="';
                                  t_26 += runtime.suppressValue(runtime.memberLookup(l_item, "value"), env.opts.autoescape);
                                  t_26 += '"';
                                  t_26 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "isChecked") ? " checked" : "", env.opts.autoescape);
                                  t_26 += runtime.suppressValue(runtime.memberLookup(l_item, "disabled") ? " disabled" : "", env.opts.autoescape);
                                  if (runtime.memberLookup(runtime.memberLookup(l_item, "conditional"), "html")) {
                                    t_26 += ' data-aria-controls="';
                                    t_26 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "conditionalId"), env.opts.autoescape);
                                    t_26 += '"';
                                    ;
                                  }
                                  if (runtime.memberLookup(l_item, "behaviour")) {
                                    t_26 += ' data-behaviour="';
                                    t_26 += runtime.suppressValue(runtime.memberLookup(l_item, "behaviour"), env.opts.autoescape);
                                    t_26 += '"';
                                    ;
                                  }
                                  if (runtime.contextOrFrameLookup(context, frame, "itemDescribedBy")) {
                                    t_26 += ' aria-describedby="';
                                    t_26 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "itemDescribedBy"), env.opts.autoescape);
                                    t_26 += '"';
                                    ;
                                  }
                                  t_26 += runtime.suppressValue((lineno = 41, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [runtime.memberLookup(l_item, "attributes")])), env.opts.autoescape);
                                  t_26 += ">\n      ";
                                  t_26 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 42, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukLabel"), "govukLabel", context, [{ "html": runtime.memberLookup(l_item, "html"), "text": runtime.memberLookup(l_item, "text"), "classes": "govuk-checkboxes__label" + (runtime.memberLookup(runtime.memberLookup(l_item, "label"), "classes") ? " " + runtime.memberLookup(runtime.memberLookup(l_item, "label"), "classes") : ""), "attributes": runtime.memberLookup(runtime.memberLookup(l_item, "label"), "attributes"), "for": runtime.contextOrFrameLookup(context, frame, "itemId") }]))), 6), env.opts.autoescape);
                                  t_26 += "\n      ";
                                  if (runtime.contextOrFrameLookup(context, frame, "hasHint")) {
                                    t_26 += "\n      ";
                                    t_26 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 50, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukHint"), "govukHint", context, [{ "id": runtime.contextOrFrameLookup(context, frame, "itemHintId"), "classes": "govuk-checkboxes__hint" + (runtime.memberLookup(runtime.memberLookup(l_item, "hint"), "classes") ? " " + runtime.memberLookup(runtime.memberLookup(l_item, "hint"), "classes") : ""), "attributes": runtime.memberLookup(runtime.memberLookup(l_item, "hint"), "attributes"), "html": runtime.memberLookup(runtime.memberLookup(l_item, "hint"), "html"), "text": runtime.memberLookup(runtime.memberLookup(l_item, "hint"), "text") }]))), 6), env.opts.autoescape);
                                    t_26 += "\n      ";
                                    ;
                                  }
                                  t_26 += "\n    </div>\n    ";
                                  if (runtime.memberLookup(runtime.memberLookup(l_item, "conditional"), "html")) {
                                    t_26 += '\n    <div class="govuk-checkboxes__conditional';
                                    if (!runtime.contextOrFrameLookup(context, frame, "isChecked")) {
                                      t_26 += " govuk-checkboxes__conditional--hidden";
                                      ;
                                    }
                                    t_26 += '" id="';
                                    t_26 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "conditionalId"), env.opts.autoescape);
                                    t_26 += '">\n      ';
                                    t_26 += runtime.suppressValue(env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(l_item, "conditional"), "html"))), env.opts.autoescape);
                                    t_26 += "\n    </div>\n    ";
                                    ;
                                  }
                                  t_26 += "\n  ";
                                  ;
                                }
                                t_26 += "\n";
                                ;
                                frame = callerFrame;
                                return new runtime.SafeString(t_26);
                              }
                            );
                            context.setVariable("_checkboxItem", macro_t_25);
                            var t_35;
                            t_35 = function() {
                              var output2 = "";
                              output2 += "\n";
                              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint")) {
                                output2 += "\n  ";
                                var t_36;
                                t_36 = runtime.contextOrFrameLookup(context, frame, "idPrefix") + "-hint";
                                frame.set("hintId", t_36, true);
                                if (frame.topLevel) {
                                  context.setVariable("hintId", t_36);
                                }
                                if (frame.topLevel) {
                                  context.addExport("hintId", t_36);
                                }
                                output2 += "\n  ";
                                var t_37;
                                t_37 = runtime.contextOrFrameLookup(context, frame, "describedBy") ? runtime.contextOrFrameLookup(context, frame, "describedBy") + " " + runtime.contextOrFrameLookup(context, frame, "hintId") : runtime.contextOrFrameLookup(context, frame, "hintId");
                                frame.set("describedBy", t_37, true);
                                if (frame.topLevel) {
                                  context.setVariable("describedBy", t_37);
                                }
                                if (frame.topLevel) {
                                  context.addExport("describedBy", t_37);
                                }
                                output2 += "\n  ";
                                output2 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 72, colno = 14, runtime.callWrap(t_16, "govukHint", context, [{ "id": runtime.contextOrFrameLookup(context, frame, "hintId"), "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "classes"), "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "attributes"), "html": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "html"), "text": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "text") }]))), 2), env.opts.autoescape);
                                output2 += "\n";
                                ;
                              }
                              output2 += "\n";
                              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage")) {
                                output2 += "\n  ";
                                var t_38;
                                t_38 = runtime.contextOrFrameLookup(context, frame, "idPrefix") + "-error";
                                frame.set("errorId", t_38, true);
                                if (frame.topLevel) {
                                  context.setVariable("errorId", t_38);
                                }
                                if (frame.topLevel) {
                                  context.addExport("errorId", t_38);
                                }
                                output2 += "\n  ";
                                var t_39;
                                t_39 = runtime.contextOrFrameLookup(context, frame, "describedBy") ? runtime.contextOrFrameLookup(context, frame, "describedBy") + " " + runtime.contextOrFrameLookup(context, frame, "errorId") : runtime.contextOrFrameLookup(context, frame, "errorId");
                                frame.set("describedBy", t_39, true);
                                if (frame.topLevel) {
                                  context.setVariable("describedBy", t_39);
                                }
                                if (frame.topLevel) {
                                  context.addExport("describedBy", t_39);
                                }
                                output2 += "\n  ";
                                output2 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 83, colno = 22, runtime.callWrap(t_8, "govukErrorMessage", context, [{ "id": runtime.contextOrFrameLookup(context, frame, "errorId"), "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "classes"), "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "attributes"), "html": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "html"), "text": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "text"), "visuallyHiddenText": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "visuallyHiddenText") }]))), 2), env.opts.autoescape);
                                output2 += "\n";
                                ;
                              }
                              output2 += '\n  <div class="govuk-checkboxes';
                              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
                                output2 += " ";
                                output2 += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
                                ;
                              }
                              output2 += '"';
                              output2 += runtime.suppressValue((lineno = 93, colno = 23, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
                              output2 += ' data-module="govuk-checkboxes">\n    ';
                              if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInputs")) {
                                output2 += "\n    ";
                                output2 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInputs"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInputs"), "html"))), 4) : runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInputs"), "text"), env.opts.autoescape);
                                output2 += "\n    ";
                                ;
                              }
                              output2 += "\n    ";
                              frame = frame.push();
                              var t_42 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "items");
                              if (t_42) {
                                t_42 = runtime.fromIterator(t_42);
                                var t_41 = t_42.length;
                                for (var t_40 = 0; t_40 < t_42.length; t_40++) {
                                  var t_43 = t_42[t_40];
                                  frame.set("item", t_43);
                                  frame.set("loop.index", t_40 + 1);
                                  frame.set("loop.index0", t_40);
                                  frame.set("loop.revindex", t_41 - t_40);
                                  frame.set("loop.revindex0", t_41 - t_40 - 1);
                                  frame.set("loop.first", t_40 === 0);
                                  frame.set("loop.last", t_40 === t_41 - 1);
                                  frame.set("loop.length", t_41);
                                  output2 += "\n      ";
                                  if (t_43) {
                                    output2 += runtime.suppressValue((lineno = 99, colno = 25, runtime.callWrap(macro_t_25, "_checkboxItem", context, [runtime.contextOrFrameLookup(context, frame, "params"), t_43, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "loop"), "index")])), env.opts.autoescape);
                                    ;
                                  }
                                  output2 += "\n    ";
                                  ;
                                }
                              }
                              frame = frame.pop();
                              output2 += "\n    ";
                              if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInputs")) {
                                output2 += "\n    ";
                                output2 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInputs"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInputs"), "html"))), 4) : runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInputs"), "text"), env.opts.autoescape);
                                output2 += "\n    ";
                                ;
                              }
                              output2 += "\n  </div>\n";
                              ;
                              return output2;
                            }();
                            frame.set("innerHtml", t_35, true);
                            if (frame.topLevel) {
                              context.setVariable("innerHtml", t_35);
                            }
                            if (frame.topLevel) {
                              context.addExport("innerHtml", t_35);
                            }
                            output += '<div class="govuk-form-group';
                            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage")) {
                              output += " govuk-form-group--error";
                              ;
                            }
                            if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "classes")) {
                              output += " ";
                              output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "classes"), env.opts.autoescape);
                              ;
                            }
                            output += '"';
                            output += runtime.suppressValue((lineno = 109, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "attributes")])), env.opts.autoescape);
                            output += ">\n";
                            if (runtime.contextOrFrameLookup(context, frame, "hasFieldset")) {
                              output += "\n  ";
                              output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 111, colno = 18, runtime.callWrap(t_122, "govukFieldset", context, [{ "describedBy": runtime.contextOrFrameLookup(context, frame, "describedBy"), "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "fieldset"), "classes"), "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "fieldset"), "attributes"), "legend": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "fieldset"), "legend"), "html": env.getFilter("trim").call(context, runtime.contextOrFrameLookup(context, frame, "innerHtml")) }]))), 2), env.opts.autoescape);
                              output += "\n";
                              ;
                            } else {
                              output += "\n  ";
                              output += runtime.suppressValue(env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "innerHtml"))), env.opts.autoescape);
                              output += "\n";
                              ;
                            }
                            output += "\n</div>\n";
                            if (parentTemplate) {
                              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
                            } else {
                              cb(null, output);
                            }
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/cookie-banner/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/cookie-banner/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukCookieBanner");
        context.setVariable("govukCookieBanner", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/cookie-banner/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/cookie-banner/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += "\n";
            env.getTemplate("../button/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/cookie-banner/template.njk", false, function(t_6, t_5) {
              if (t_6) {
                cb(t_6);
                return;
              }
              t_5.getExported(function(t_7, t_52) {
                if (t_7) {
                  cb(t_7);
                  return;
                }
                if (Object.prototype.hasOwnProperty.call(t_52, "govukButton")) {
                  var t_8 = t_52.govukButton;
                } else {
                  cb(new Error("cannot import 'govukButton'"));
                  return;
                }
                context.setVariable("govukButton", t_8);
                output += '<div class="govuk-cookie-banner';
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
                  output += " ";
                  output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
                  ;
                }
                output += '" data-nosnippet role="region" aria-label="';
                output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "ariaLabel"), "Cookie banner", true), env.opts.autoescape);
                output += '"';
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hidden")) {
                  output += " hidden";
                  ;
                }
                output += runtime.suppressValue((lineno = 5, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
                output += ">\n  ";
                frame = frame.push();
                var t_11 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "messages");
                if (t_11) {
                  t_11 = runtime.fromIterator(t_11);
                  var t_10 = t_11.length;
                  for (var t_9 = 0; t_9 < t_11.length; t_9++) {
                    var t_122 = t_11[t_9];
                    frame.set("message", t_122);
                    frame.set("loop.index", t_9 + 1);
                    frame.set("loop.index0", t_9);
                    frame.set("loop.revindex", t_10 - t_9);
                    frame.set("loop.revindex0", t_10 - t_9 - 1);
                    frame.set("loop.first", t_9 === 0);
                    frame.set("loop.last", t_9 === t_10 - 1);
                    frame.set("loop.length", t_10);
                    output += '\n  <div class="govuk-cookie-banner__message';
                    if (runtime.memberLookup(t_122, "classes")) {
                      output += " ";
                      output += runtime.suppressValue(runtime.memberLookup(t_122, "classes"), env.opts.autoescape);
                      ;
                    }
                    output += ' govuk-width-container"';
                    if (runtime.memberLookup(t_122, "role")) {
                      output += ' role="';
                      output += runtime.suppressValue(runtime.memberLookup(t_122, "role"), env.opts.autoescape);
                      output += '"';
                      ;
                    }
                    output += runtime.suppressValue((lineno = 8, colno = 23, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(t_122, "attributes")])), env.opts.autoescape);
                    if (runtime.memberLookup(t_122, "hidden")) {
                      output += " hidden";
                      ;
                    }
                    output += '>\n\n    <div class="govuk-grid-row">\n      <div class="govuk-grid-column-two-thirds">\n        ';
                    if (runtime.memberLookup(t_122, "headingHtml") || runtime.memberLookup(t_122, "headingText")) {
                      output += '\n        <h2 class="govuk-cookie-banner__heading govuk-heading-m">\n          ';
                      output += runtime.suppressValue(runtime.memberLookup(t_122, "headingHtml") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(t_122, "headingHtml"))), 10) : runtime.memberLookup(t_122, "headingText"), env.opts.autoescape);
                      output += "\n        </h2>\n        ";
                      ;
                    }
                    output += '\n        <div class="govuk-cookie-banner__content">\n          ';
                    if (runtime.memberLookup(t_122, "html")) {
                      output += "\n          ";
                      output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(t_122, "html"))), 10), env.opts.autoescape);
                      output += "\n          ";
                      ;
                    } else {
                      if (runtime.memberLookup(t_122, "text")) {
                        output += '\n          <p class="govuk-body">';
                        output += runtime.suppressValue(runtime.memberLookup(t_122, "text"), env.opts.autoescape);
                        output += "</p>\n          ";
                        ;
                      }
                      ;
                    }
                    output += "\n        </div>\n      </div>\n    </div>\n\n    ";
                    if (runtime.memberLookup(t_122, "actions")) {
                      output += '\n    <div class="govuk-button-group">\n    ';
                      frame = frame.push();
                      var t_15 = runtime.memberLookup(t_122, "actions");
                      if (t_15) {
                        t_15 = runtime.fromIterator(t_15);
                        var t_14 = t_15.length;
                        for (var t_13 = 0; t_13 < t_15.length; t_13++) {
                          var t_16 = t_15[t_13];
                          frame.set("action", t_16);
                          frame.set("loop.index", t_13 + 1);
                          frame.set("loop.index0", t_13);
                          frame.set("loop.revindex", t_14 - t_13);
                          frame.set("loop.revindex0", t_14 - t_13 - 1);
                          frame.set("loop.first", t_13 === 0);
                          frame.set("loop.last", t_13 === t_14 - 1);
                          frame.set("loop.length", t_14);
                          output += "\n      ";
                          var t_17;
                          t_17 = function() {
                            var output2 = "";
                            output2 += "\n        ";
                            if (!runtime.memberLookup(t_16, "href") || runtime.memberLookup(t_16, "type") == "button") {
                              output2 += "\n          ";
                              output2 += runtime.suppressValue((lineno = 33, colno = 24, runtime.callWrap(t_8, "govukButton", context, [{ "text": runtime.memberLookup(t_16, "text"), "type": runtime.memberLookup(t_16, "type") ? runtime.memberLookup(t_16, "type") : "button", "name": runtime.memberLookup(t_16, "name"), "value": runtime.memberLookup(t_16, "value"), "classes": runtime.memberLookup(t_16, "classes"), "href": runtime.memberLookup(t_16, "href"), "attributes": runtime.memberLookup(t_16, "attributes") }])), env.opts.autoescape);
                              output2 += "\n        ";
                              ;
                            } else {
                              output2 += '\n          <a class="govuk-link';
                              if (runtime.memberLookup(t_16, "classes")) {
                                output2 += " ";
                                output2 += runtime.suppressValue(runtime.memberLookup(t_16, "classes"), env.opts.autoescape);
                                ;
                              }
                              output2 += '" href="';
                              output2 += runtime.suppressValue(runtime.memberLookup(t_16, "href"), env.opts.autoescape);
                              output2 += '"';
                              output2 += runtime.suppressValue((lineno = 44, colno = 31, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(t_16, "attributes")])), env.opts.autoescape);
                              output2 += ">";
                              output2 += runtime.suppressValue(runtime.memberLookup(t_16, "text"), env.opts.autoescape);
                              output2 += "</a>\n        ";
                              ;
                            }
                            ;
                            return output2;
                          }();
                          frame.set("buttonHtml", t_17, true);
                          if (frame.topLevel) {
                            context.setVariable("buttonHtml", t_17);
                          }
                          if (frame.topLevel) {
                            context.addExport("buttonHtml", t_17);
                          }
                          output += "\n      ";
                          output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "buttonHtml"))), 6), env.opts.autoescape);
                          output += "\n    ";
                          ;
                        }
                      }
                      frame = frame.pop();
                      output += "\n    </div>\n    ";
                      ;
                    }
                    output += "\n\n  </div>\n  ";
                    ;
                  }
                }
                frame = frame.pop();
                output += "\n</div>\n";
                if (parentTemplate) {
                  parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
                } else {
                  cb(null, output);
                }
              });
            });
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/date-input/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/date-input/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukDateInput");
        context.setVariable("govukDateInput", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/date-input/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/date-input/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += "\n";
            env.getTemplate("../error-message/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/date-input/template.njk", false, function(t_6, t_5) {
              if (t_6) {
                cb(t_6);
                return;
              }
              t_5.getExported(function(t_7, t_52) {
                if (t_7) {
                  cb(t_7);
                  return;
                }
                if (Object.prototype.hasOwnProperty.call(t_52, "govukErrorMessage")) {
                  var t_8 = t_52.govukErrorMessage;
                } else {
                  cb(new Error("cannot import 'govukErrorMessage'"));
                  return;
                }
                context.setVariable("govukErrorMessage", t_8);
                output += "\n";
                env.getTemplate("../fieldset/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/date-input/template.njk", false, function(t_10, t_9) {
                  if (t_10) {
                    cb(t_10);
                    return;
                  }
                  t_9.getExported(function(t_11, t_92) {
                    if (t_11) {
                      cb(t_11);
                      return;
                    }
                    if (Object.prototype.hasOwnProperty.call(t_92, "govukFieldset")) {
                      var t_122 = t_92.govukFieldset;
                    } else {
                      cb(new Error("cannot import 'govukFieldset'"));
                      return;
                    }
                    context.setVariable("govukFieldset", t_122);
                    output += "\n";
                    env.getTemplate("../hint/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/date-input/template.njk", false, function(t_14, t_13) {
                      if (t_14) {
                        cb(t_14);
                        return;
                      }
                      t_13.getExported(function(t_15, t_132) {
                        if (t_15) {
                          cb(t_15);
                          return;
                        }
                        if (Object.prototype.hasOwnProperty.call(t_132, "govukHint")) {
                          var t_16 = t_132.govukHint;
                        } else {
                          cb(new Error("cannot import 'govukHint'"));
                          return;
                        }
                        context.setVariable("govukHint", t_16);
                        output += "\n";
                        env.getTemplate("../input/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/date-input/template.njk", false, function(t_18, t_17) {
                          if (t_18) {
                            cb(t_18);
                            return;
                          }
                          t_17.getExported(function(t_19, t_172) {
                            if (t_19) {
                              cb(t_19);
                              return;
                            }
                            if (Object.prototype.hasOwnProperty.call(t_172, "govukInput")) {
                              var t_20 = t_172.govukInput;
                            } else {
                              cb(new Error("cannot import 'govukInput'"));
                              return;
                            }
                            context.setVariable("govukInput", t_20);
                            var t_21;
                            t_21 = runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "fieldset"), "describedBy") ? runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "fieldset"), "describedBy") : "";
                            frame.set("describedBy", t_21, true);
                            if (frame.topLevel) {
                              context.setVariable("describedBy", t_21);
                            }
                            if (frame.topLevel) {
                              context.addExport("describedBy", t_21);
                            }
                            var t_22;
                            t_22 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "fieldset") ? true : false;
                            frame.set("hasFieldset", t_22, true);
                            if (frame.topLevel) {
                              context.setVariable("hasFieldset", t_22);
                            }
                            if (frame.topLevel) {
                              context.addExport("hasFieldset", t_22);
                            }
                            if (env.getFilter("length").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "items"))) {
                              output += "\n  ";
                              var t_23;
                              t_23 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "items");
                              frame.set("dateInputItems", t_23, true);
                              if (frame.topLevel) {
                                context.setVariable("dateInputItems", t_23);
                              }
                              if (frame.topLevel) {
                                context.addExport("dateInputItems", t_23);
                              }
                              output += "\n";
                              ;
                            } else {
                              output += "\n  ";
                              var t_24;
                              t_24 = [{ "name": "day", "classes": "govuk-input--width-2" }, { "name": "month", "classes": "govuk-input--width-2" }, { "name": "year", "classes": "govuk-input--width-4" }];
                              frame.set("dateInputItems", t_24, true);
                              if (frame.topLevel) {
                                context.setVariable("dateInputItems", t_24);
                              }
                              if (frame.topLevel) {
                                context.addExport("dateInputItems", t_24);
                              }
                              output += "\n";
                              ;
                            }
                            var t_25;
                            t_25 = function() {
                              var output2 = "";
                              output2 += "\n";
                              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint")) {
                                output2 += "\n  ";
                                var t_26;
                                t_26 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id") + "-hint";
                                frame.set("hintId", t_26, true);
                                if (frame.topLevel) {
                                  context.setVariable("hintId", t_26);
                                }
                                if (frame.topLevel) {
                                  context.addExport("hintId", t_26);
                                }
                                output2 += "\n  ";
                                var t_27;
                                t_27 = runtime.contextOrFrameLookup(context, frame, "describedBy") ? runtime.contextOrFrameLookup(context, frame, "describedBy") + " " + runtime.contextOrFrameLookup(context, frame, "hintId") : runtime.contextOrFrameLookup(context, frame, "hintId");
                                frame.set("describedBy", t_27, true);
                                if (frame.topLevel) {
                                  context.setVariable("describedBy", t_27);
                                }
                                if (frame.topLevel) {
                                  context.addExport("describedBy", t_27);
                                }
                                output2 += "\n  ";
                                output2 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 37, colno = 14, runtime.callWrap(t_16, "govukHint", context, [{ "id": runtime.contextOrFrameLookup(context, frame, "hintId"), "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "classes"), "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "attributes"), "html": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "html"), "text": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "text") }]))), 2), env.opts.autoescape);
                                output2 += "\n";
                                ;
                              }
                              output2 += "\n";
                              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage")) {
                                output2 += "\n  ";
                                var t_28;
                                t_28 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id") + "-error";
                                frame.set("errorId", t_28, true);
                                if (frame.topLevel) {
                                  context.setVariable("errorId", t_28);
                                }
                                if (frame.topLevel) {
                                  context.addExport("errorId", t_28);
                                }
                                output2 += "\n  ";
                                var t_29;
                                t_29 = runtime.contextOrFrameLookup(context, frame, "describedBy") ? runtime.contextOrFrameLookup(context, frame, "describedBy") + " " + runtime.contextOrFrameLookup(context, frame, "errorId") : runtime.contextOrFrameLookup(context, frame, "errorId");
                                frame.set("describedBy", t_29, true);
                                if (frame.topLevel) {
                                  context.setVariable("describedBy", t_29);
                                }
                                if (frame.topLevel) {
                                  context.addExport("describedBy", t_29);
                                }
                                output2 += "\n  ";
                                output2 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 48, colno = 22, runtime.callWrap(t_8, "govukErrorMessage", context, [{ "id": runtime.contextOrFrameLookup(context, frame, "errorId"), "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "classes"), "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "attributes"), "html": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "html"), "text": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "text"), "visuallyHiddenText": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "visuallyHiddenText") }]))), 2), env.opts.autoescape);
                                output2 += "\n";
                                ;
                              }
                              output2 += '\n  <div class="govuk-date-input';
                              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
                                output2 += " ";
                                output2 += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
                                ;
                              }
                              output2 += '"';
                              output2 += runtime.suppressValue((lineno = 58, colno = 23, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
                              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id")) {
                                output2 += ' id="';
                                output2 += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id"), env.opts.autoescape);
                                output2 += '"';
                                ;
                              }
                              output2 += ">\n    ";
                              if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInputs")) {
                                output2 += "\n    ";
                                output2 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInputs"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInputs"), "html"))), 4) : runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInputs"), "text"), env.opts.autoescape);
                                output2 += "\n    ";
                                ;
                              }
                              output2 += "\n    ";
                              frame = frame.push();
                              var t_32 = runtime.contextOrFrameLookup(context, frame, "dateInputItems");
                              if (t_32) {
                                t_32 = runtime.fromIterator(t_32);
                                var t_31 = t_32.length;
                                for (var t_30 = 0; t_30 < t_32.length; t_30++) {
                                  var t_33 = t_32[t_30];
                                  frame.set("item", t_33);
                                  frame.set("loop.index", t_30 + 1);
                                  frame.set("loop.index0", t_30);
                                  frame.set("loop.revindex", t_31 - t_30);
                                  frame.set("loop.revindex0", t_31 - t_30 - 1);
                                  frame.set("loop.first", t_30 === 0);
                                  frame.set("loop.last", t_30 === t_31 - 1);
                                  frame.set("loop.length", t_31);
                                  output2 += '\n    <div class="govuk-date-input__item">\n      ';
                                  output2 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 65, colno = 19, runtime.callWrap(t_20, "govukInput", context, [{ "label": { "text": runtime.memberLookup(t_33, "label") ? runtime.memberLookup(t_33, "label") : env.getFilter("capitalize").call(context, runtime.memberLookup(t_33, "name")), "classes": "govuk-date-input__label" }, "id": runtime.memberLookup(t_33, "id") ? runtime.memberLookup(t_33, "id") : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id") + "-" + runtime.memberLookup(t_33, "name"), "classes": "govuk-date-input__input " + (runtime.memberLookup(t_33, "classes") ? runtime.memberLookup(t_33, "classes") : ""), "name": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "namePrefix") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "namePrefix") + "-" + runtime.memberLookup(t_33, "name") : runtime.memberLookup(t_33, "name"), "value": runtime.memberLookup(t_33, "value"), "type": "text", "inputmode": runtime.memberLookup(t_33, "inputmode") ? runtime.memberLookup(t_33, "inputmode") : "numeric", "autocomplete": runtime.memberLookup(t_33, "autocomplete"), "pattern": runtime.memberLookup(t_33, "pattern"), "attributes": runtime.memberLookup(t_33, "attributes") }]))), 6), env.opts.autoescape);
                                  output2 += "\n    </div>\n    ";
                                  ;
                                }
                              }
                              frame = frame.pop();
                              output2 += "\n    ";
                              if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInputs")) {
                                output2 += "\n    ";
                                output2 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInputs"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInputs"), "html"))), 4) : runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInputs"), "text"), env.opts.autoescape);
                                output2 += "\n    ";
                                ;
                              }
                              output2 += "\n  </div>\n";
                              ;
                              return output2;
                            }();
                            frame.set("innerHtml", t_25, true);
                            if (frame.topLevel) {
                              context.setVariable("innerHtml", t_25);
                            }
                            if (frame.topLevel) {
                              context.addExport("innerHtml", t_25);
                            }
                            output += '<div class="govuk-form-group';
                            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage")) {
                              output += " govuk-form-group--error";
                              ;
                            }
                            if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "classes")) {
                              output += " ";
                              output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "classes"), env.opts.autoescape);
                              ;
                            }
                            output += '"';
                            output += runtime.suppressValue((lineno = 88, colno = 191, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "attributes")])), env.opts.autoescape);
                            output += ">\n";
                            if (runtime.contextOrFrameLookup(context, frame, "hasFieldset")) {
                              output += "\n  ";
                              output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 94, colno = 18, runtime.callWrap(t_122, "govukFieldset", context, [{ "describedBy": runtime.contextOrFrameLookup(context, frame, "describedBy"), "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "fieldset"), "classes"), "role": "group", "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "fieldset"), "attributes"), "legend": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "fieldset"), "legend"), "html": env.getFilter("trim").call(context, runtime.contextOrFrameLookup(context, frame, "innerHtml")) }]))), 2), env.opts.autoescape);
                              output += "\n";
                              ;
                            } else {
                              output += "\n  ";
                              output += runtime.suppressValue(env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "innerHtml"))), env.opts.autoescape);
                              output += "\n";
                              ;
                            }
                            output += "\n</div>\n";
                            if (parentTemplate) {
                              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
                            } else {
                              cb(null, output);
                            }
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/details/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/details/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukDetails");
        context.setVariable("govukDetails", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/details/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/details/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += "<details";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id")) {
              output += ' id="';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id"), env.opts.autoescape);
              output += '"';
              ;
            }
            output += ' class="govuk-details';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
              output += " ";
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
              ;
            }
            output += '"';
            output += runtime.suppressValue((lineno = 3, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "open") ? " open" : "", env.opts.autoescape);
            output += '>\n  <summary class="govuk-details__summary">\n    <span class="govuk-details__summary-text">\n      ';
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "summaryHtml") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "summaryHtml"))), 6) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "summaryText"), env.opts.autoescape);
            output += '\n    </span>\n  </summary>\n  <div class="govuk-details__text">\n    ';
            output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "caller") ? (lineno = 11, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html") ? env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html")) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text"), env.opts.autoescape);
            output += "\n  </div>\n</details>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/error-message/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/error-message/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukErrorMessage");
        context.setVariable("govukErrorMessage", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/error-message/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/error-message/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            var t_5;
            t_5 = env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "visuallyHiddenText"), "Error");
            frame.set("visuallyHiddenText", t_5, true);
            if (frame.topLevel) {
              context.setVariable("visuallyHiddenText", t_5);
            }
            if (frame.topLevel) {
              context.addExport("visuallyHiddenText", t_5);
            }
            var t_6;
            t_6 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html"))), 2) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text");
            frame.set("errorMessageText", t_6, true);
            if (frame.topLevel) {
              context.setVariable("errorMessageText", t_6);
            }
            if (frame.topLevel) {
              context.addExport("errorMessageText", t_6);
            }
            output += "<p";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id")) {
              output += ' id="';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id"), env.opts.autoescape);
              output += '"';
              ;
            }
            output += ' class="govuk-error-message';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
              output += " ";
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
              ;
            }
            output += '"';
            output += runtime.suppressValue((lineno = 6, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
            output += ">\n  ";
            if (runtime.contextOrFrameLookup(context, frame, "visuallyHiddenText")) {
              output += '\n  <span class="govuk-visually-hidden">';
              output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "visuallyHiddenText"), env.opts.autoescape);
              output += ":</span> ";
              output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "errorMessageText"), env.opts.autoescape);
              output += "\n  ";
              ;
            } else {
              output += "\n  ";
              output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "errorMessageText"), env.opts.autoescape);
              output += "\n  ";
              ;
            }
            output += "\n</p>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/error-summary/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/error-summary/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukErrorSummary");
        context.setVariable("govukErrorSummary", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/error-summary/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/error-summary/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += '<div class="govuk-error-summary';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
              output += " ";
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
              ;
            }
            output += '"';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "disableAutoFocus") !== runtime.contextOrFrameLookup(context, frame, "undefined")) {
              output += ' data-disable-auto-focus="';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "disableAutoFocus"), env.opts.autoescape);
              output += '"';
              ;
            }
            output += runtime.suppressValue((lineno = 5, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
            output += ' data-module="govuk-error-summary">';
            output += '\n  <div role="alert">\n    <h2 class="govuk-error-summary__title">\n      ';
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "titleHtml") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "titleHtml"))), 6) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "titleText"), env.opts.autoescape);
            output += '\n    </h2>\n    <div class="govuk-error-summary__body">\n      ';
            if (runtime.contextOrFrameLookup(context, frame, "caller") || runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "descriptionHtml") || runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "descriptionText")) {
              output += "\n      <p>\n        ";
              output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "caller") ? (lineno = 15, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "descriptionHtml") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "descriptionHtml"))), 8) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "descriptionText"), env.opts.autoescape);
              output += "\n      </p>\n      ";
              ;
            }
            output += "\n      ";
            if (env.getFilter("length").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorList"))) {
              output += '\n        <ul class="govuk-list govuk-error-summary__list">\n        ';
              frame = frame.push();
              var t_7 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorList");
              if (t_7) {
                t_7 = runtime.fromIterator(t_7);
                var t_6 = t_7.length;
                for (var t_5 = 0; t_5 < t_7.length; t_5++) {
                  var t_8 = t_7[t_5];
                  frame.set("item", t_8);
                  frame.set("loop.index", t_5 + 1);
                  frame.set("loop.index0", t_5);
                  frame.set("loop.revindex", t_6 - t_5);
                  frame.set("loop.revindex0", t_6 - t_5 - 1);
                  frame.set("loop.first", t_5 === 0);
                  frame.set("loop.last", t_5 === t_6 - 1);
                  frame.set("loop.length", t_6);
                  output += "\n          <li>\n          ";
                  if (runtime.memberLookup(t_8, "href")) {
                    output += '\n            <a href="';
                    output += runtime.suppressValue(runtime.memberLookup(t_8, "href"), env.opts.autoescape);
                    output += '"';
                    output += runtime.suppressValue((lineno = 24, colno = 33, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(t_8, "attributes")])), env.opts.autoescape);
                    output += ">";
                    output += runtime.suppressValue(runtime.memberLookup(t_8, "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(t_8, "html"))), 12) : runtime.memberLookup(t_8, "text"), env.opts.autoescape);
                    output += "</a>\n          ";
                    ;
                  } else {
                    output += "\n            ";
                    output += runtime.suppressValue(runtime.memberLookup(t_8, "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(t_8, "html"))), 10) : runtime.memberLookup(t_8, "text"), env.opts.autoescape);
                    output += "\n          ";
                    ;
                  }
                  output += "\n          </li>\n        ";
                  ;
                }
              }
              frame = frame.pop();
              output += "\n        </ul>\n      ";
              ;
            }
            output += "\n    </div>\n  </div>\n</div>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/exit-this-page/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/exit-this-page/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukExitThisPage");
        context.setVariable("govukExitThisPage", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/exit-this-page/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/exit-this-page/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += "\n";
            env.getTemplate("../button/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/exit-this-page/template.njk", false, function(t_6, t_5) {
              if (t_6) {
                cb(t_6);
                return;
              }
              t_5.getExported(function(t_7, t_52) {
                if (t_7) {
                  cb(t_7);
                  return;
                }
                if (Object.prototype.hasOwnProperty.call(t_52, "govukButton")) {
                  var t_8 = t_52.govukButton;
                } else {
                  cb(new Error("cannot import 'govukButton'"));
                  return;
                }
                context.setVariable("govukButton", t_8);
                var t_9;
                t_9 = function() {
                  var output2 = "";
                  output2 += '\n  <span class="govuk-visually-hidden">Emergency</span> Exit this page\n';
                  ;
                  return output2;
                }();
                frame.set("defaultHtml", t_9, true);
                if (frame.topLevel) {
                  context.setVariable("defaultHtml", t_9);
                }
                if (frame.topLevel) {
                  context.addExport("defaultHtml", t_9);
                }
                output += "<div";
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id")) {
                  output += ' id="';
                  output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id"), env.opts.autoescape);
                  output += '"';
                  ;
                }
                output += ' class="govuk-exit-this-page';
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
                  output += " ";
                  output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
                  ;
                }
                output += '" data-module="govuk-exit-this-page"';
                output += runtime.suppressValue((lineno = 9, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "activatedText")) {
                  output += ' data-i18n.activated="';
                  output += runtime.suppressValue(env.getFilter("escape").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "activatedText")), env.opts.autoescape);
                  output += '"';
                  ;
                }
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "timedOutText")) {
                  output += ' data-i18n.timed-out="';
                  output += runtime.suppressValue(env.getFilter("escape").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "timedOutText")), env.opts.autoescape);
                  output += '"';
                  ;
                }
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "pressTwoMoreTimesText")) {
                  output += ' data-i18n.press-two-more-times="';
                  output += runtime.suppressValue(env.getFilter("escape").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "pressTwoMoreTimesText")), env.opts.autoescape);
                  output += '"';
                  ;
                }
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "pressOneMoreTimeText")) {
                  output += ' data-i18n.press-one-more-time="';
                  output += runtime.suppressValue(env.getFilter("escape").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "pressOneMoreTimeText")), env.opts.autoescape);
                  output += '"';
                  ;
                }
                output += "\n>\n  ";
                output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 15, colno = 16, runtime.callWrap(t_8, "govukButton", context, [{ "html": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html") || runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html") : runtime.contextOrFrameLookup(context, frame, "defaultHtml"), "text": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text"), "classes": "govuk-button--warning govuk-exit-this-page__button govuk-js-exit-this-page-button", "href": env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "redirectUrl"), "https://www.bbc.co.uk/weather", true), "attributes": { "rel": "nofollow noreferrer" } }]))), 2), env.opts.autoescape);
                output += "\n</div>\n";
                if (parentTemplate) {
                  parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
                } else {
                  cb(null, output);
                }
              });
            });
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/fieldset/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/fieldset/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukFieldset");
        context.setVariable("govukFieldset", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/fieldset/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/fieldset/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += '<fieldset class="govuk-fieldset';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
              output += " ";
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
              ;
            }
            output += '"';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "role")) {
              output += ' role="';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "role"), env.opts.autoescape);
              output += '"';
              ;
            }
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "describedBy")) {
              output += ' aria-describedby="';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "describedBy"), env.opts.autoescape);
              output += '"';
              ;
            }
            output += runtime.suppressValue((lineno = 6, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
            output += ">\n  ";
            if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "legend"), "html") || runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "legend"), "text")) {
              output += '\n  <legend class="govuk-fieldset__legend';
              if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "legend"), "classes")) {
                output += " ";
                output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "legend"), "classes"), env.opts.autoescape);
                ;
              }
              output += '">\n  ';
              if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "legend"), "isPageHeading")) {
                output += '\n    <h1 class="govuk-fieldset__heading">\n      ';
                output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "legend"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "legend"), "html"))), 6) : runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "legend"), "text"), env.opts.autoescape);
                output += "\n    </h1>\n  ";
                ;
              } else {
                output += "\n    ";
                output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "legend"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "legend"), "html"))), 4) : runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "legend"), "text"), env.opts.autoescape);
                output += "\n  ";
                ;
              }
              output += "\n  </legend>\n  ";
              ;
            }
            output += "\n";
            if (runtime.contextOrFrameLookup(context, frame, "caller")) {
              output += runtime.suppressValue((lineno = 19, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])), env.opts.autoescape);
              output += "\n";
              ;
            } else {
              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html")) {
                output += "\n  ";
                output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html")), env.opts.autoescape);
                output += "\n";
                ;
              }
              ;
            }
            output += "\n</fieldset>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/file-upload/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/file-upload/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukFileUpload");
        context.setVariable("govukFileUpload", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/file-upload/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/file-upload/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += "\n";
            env.getTemplate("../error-message/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/file-upload/template.njk", false, function(t_6, t_5) {
              if (t_6) {
                cb(t_6);
                return;
              }
              t_5.getExported(function(t_7, t_52) {
                if (t_7) {
                  cb(t_7);
                  return;
                }
                if (Object.prototype.hasOwnProperty.call(t_52, "govukErrorMessage")) {
                  var t_8 = t_52.govukErrorMessage;
                } else {
                  cb(new Error("cannot import 'govukErrorMessage'"));
                  return;
                }
                context.setVariable("govukErrorMessage", t_8);
                output += "\n";
                env.getTemplate("../hint/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/file-upload/template.njk", false, function(t_10, t_9) {
                  if (t_10) {
                    cb(t_10);
                    return;
                  }
                  t_9.getExported(function(t_11, t_92) {
                    if (t_11) {
                      cb(t_11);
                      return;
                    }
                    if (Object.prototype.hasOwnProperty.call(t_92, "govukHint")) {
                      var t_122 = t_92.govukHint;
                    } else {
                      cb(new Error("cannot import 'govukHint'"));
                      return;
                    }
                    context.setVariable("govukHint", t_122);
                    output += "\n";
                    env.getTemplate("../label/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/file-upload/template.njk", false, function(t_14, t_13) {
                      if (t_14) {
                        cb(t_14);
                        return;
                      }
                      t_13.getExported(function(t_15, t_132) {
                        if (t_15) {
                          cb(t_15);
                          return;
                        }
                        if (Object.prototype.hasOwnProperty.call(t_132, "govukLabel")) {
                          var t_16 = t_132.govukLabel;
                        } else {
                          cb(new Error("cannot import 'govukLabel'"));
                          return;
                        }
                        context.setVariable("govukLabel", t_16);
                        var t_17;
                        t_17 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "describedBy") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "describedBy") : "";
                        frame.set("describedBy", t_17, true);
                        if (frame.topLevel) {
                          context.setVariable("describedBy", t_17);
                        }
                        if (frame.topLevel) {
                          context.addExport("describedBy", t_17);
                        }
                        output += '\n<div class="govuk-form-group';
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage")) {
                          output += " govuk-form-group--error";
                          ;
                        }
                        if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "classes")) {
                          output += " ";
                          output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "classes"), env.opts.autoescape);
                          ;
                        }
                        output += '"';
                        output += runtime.suppressValue((lineno = 9, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "attributes")])), env.opts.autoescape);
                        output += ">\n  ";
                        output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 10, colno = 15, runtime.callWrap(t_16, "govukLabel", context, [{ "html": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "html"), "text": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "text"), "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "classes"), "isPageHeading": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "isPageHeading"), "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "attributes"), "for": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id") }]))), 2), env.opts.autoescape);
                        output += "\n";
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint")) {
                          output += "\n  ";
                          var t_18;
                          t_18 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id") + "-hint";
                          frame.set("hintId", t_18, true);
                          if (frame.topLevel) {
                            context.setVariable("hintId", t_18);
                          }
                          if (frame.topLevel) {
                            context.addExport("hintId", t_18);
                          }
                          output += "\n  ";
                          var t_19;
                          t_19 = runtime.contextOrFrameLookup(context, frame, "describedBy") ? runtime.contextOrFrameLookup(context, frame, "describedBy") + " " + runtime.contextOrFrameLookup(context, frame, "hintId") : runtime.contextOrFrameLookup(context, frame, "hintId");
                          frame.set("describedBy", t_19, true);
                          if (frame.topLevel) {
                            context.setVariable("describedBy", t_19);
                          }
                          if (frame.topLevel) {
                            context.addExport("describedBy", t_19);
                          }
                          output += "\n  ";
                          output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 21, colno = 14, runtime.callWrap(t_122, "govukHint", context, [{ "id": runtime.contextOrFrameLookup(context, frame, "hintId"), "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "classes"), "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "attributes"), "html": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "html"), "text": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "text") }]))), 2), env.opts.autoescape);
                          output += "\n";
                          ;
                        }
                        output += "\n";
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage")) {
                          output += "\n  ";
                          var t_20;
                          t_20 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id") + "-error";
                          frame.set("errorId", t_20, true);
                          if (frame.topLevel) {
                            context.setVariable("errorId", t_20);
                          }
                          if (frame.topLevel) {
                            context.addExport("errorId", t_20);
                          }
                          output += "\n  ";
                          var t_21;
                          t_21 = runtime.contextOrFrameLookup(context, frame, "describedBy") ? runtime.contextOrFrameLookup(context, frame, "describedBy") + " " + runtime.contextOrFrameLookup(context, frame, "errorId") : runtime.contextOrFrameLookup(context, frame, "errorId");
                          frame.set("describedBy", t_21, true);
                          if (frame.topLevel) {
                            context.setVariable("describedBy", t_21);
                          }
                          if (frame.topLevel) {
                            context.addExport("describedBy", t_21);
                          }
                          output += "\n  ";
                          output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 32, colno = 22, runtime.callWrap(t_8, "govukErrorMessage", context, [{ "id": runtime.contextOrFrameLookup(context, frame, "errorId"), "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "classes"), "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "attributes"), "html": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "html"), "text": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "text"), "visuallyHiddenText": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "visuallyHiddenText") }]))), 2), env.opts.autoescape);
                          output += "\n";
                          ;
                        }
                        output += "\n";
                        if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInput")) {
                          output += "\n  ";
                          output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInput"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInput"), "html"))), 2) : runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInput"), "text"), env.opts.autoescape);
                          output += "\n";
                          ;
                        }
                        output += '\n  <input class="govuk-file-upload';
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
                          output += " ";
                          output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
                          ;
                        }
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage")) {
                          output += " govuk-file-upload--error";
                          ;
                        }
                        output += '" id="';
                        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id"), env.opts.autoescape);
                        output += '" name="';
                        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "name"), env.opts.autoescape);
                        output += '" type="file"';
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "value")) {
                          output += ' value="';
                          output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "value"), env.opts.autoescape);
                          output += '"';
                          ;
                        }
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "disabled")) {
                          output += " disabled";
                          ;
                        }
                        if (runtime.contextOrFrameLookup(context, frame, "describedBy")) {
                          output += ' aria-describedby="';
                          output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "describedBy"), env.opts.autoescape);
                          output += '"';
                          ;
                        }
                        output += runtime.suppressValue((lineno = 48, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
                        output += ">\n";
                        if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput")) {
                          output += "\n  ";
                          output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput"), "html"))), 2) : runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput"), "text"), env.opts.autoescape);
                          output += "\n";
                          ;
                        }
                        output += "\n</div>\n";
                        if (parentTemplate) {
                          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
                        } else {
                          cb(null, output);
                        }
                      });
                    });
                  });
                });
              });
            });
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/footer/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/footer/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukFooter");
        context.setVariable("govukFooter", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/footer/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/footer/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += '<footer class="govuk-footer';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
              output += " ";
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
              ;
            }
            output += '"';
            output += runtime.suppressValue((lineno = 3, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
            output += '>\n  <div class="govuk-width-container';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "containerClasses")) {
              output += " ";
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "containerClasses"), env.opts.autoescape);
              ;
            }
            output += '">\n    ';
            if (env.getFilter("length").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigation"))) {
              output += '\n      <div class="govuk-footer__navigation">\n        ';
              frame = frame.push();
              var t_7 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigation");
              if (t_7) {
                t_7 = runtime.fromIterator(t_7);
                var t_6 = t_7.length;
                for (var t_5 = 0; t_5 < t_7.length; t_5++) {
                  var t_8 = t_7[t_5];
                  frame.set("nav", t_8);
                  frame.set("loop.index", t_5 + 1);
                  frame.set("loop.index0", t_5);
                  frame.set("loop.revindex", t_6 - t_5);
                  frame.set("loop.revindex0", t_6 - t_5 - 1);
                  frame.set("loop.first", t_5 === 0);
                  frame.set("loop.last", t_5 === t_6 - 1);
                  frame.set("loop.length", t_6);
                  output += '\n          <div class="govuk-footer__section govuk-grid-column-';
                  output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(t_8, "width"), "full", true), env.opts.autoescape);
                  output += '">\n            <h2 class="govuk-footer__heading govuk-heading-m">';
                  output += runtime.suppressValue(runtime.memberLookup(t_8, "title"), env.opts.autoescape);
                  output += "</h2>\n            ";
                  if (env.getFilter("length").call(context, runtime.memberLookup(t_8, "items"))) {
                    output += "\n              ";
                    var t_9;
                    t_9 = runtime.memberLookup(t_8, "columns") ? "govuk-footer__list--columns-" + runtime.memberLookup(t_8, "columns") : "";
                    frame.set("listClasses", t_9, true);
                    if (frame.topLevel) {
                      context.setVariable("listClasses", t_9);
                    }
                    if (frame.topLevel) {
                      context.addExport("listClasses", t_9);
                    }
                    output += '\n              <ul class="govuk-footer__list';
                    if (runtime.contextOrFrameLookup(context, frame, "listClasses")) {
                      output += " ";
                      output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "listClasses"), env.opts.autoescape);
                      ;
                    }
                    output += '">\n                ';
                    frame = frame.push();
                    var t_122 = runtime.memberLookup(t_8, "items");
                    if (t_122) {
                      t_122 = runtime.fromIterator(t_122);
                      var t_11 = t_122.length;
                      for (var t_10 = 0; t_10 < t_122.length; t_10++) {
                        var t_13 = t_122[t_10];
                        frame.set("item", t_13);
                        frame.set("loop.index", t_10 + 1);
                        frame.set("loop.index0", t_10);
                        frame.set("loop.revindex", t_11 - t_10);
                        frame.set("loop.revindex0", t_11 - t_10 - 1);
                        frame.set("loop.first", t_10 === 0);
                        frame.set("loop.last", t_10 === t_11 - 1);
                        frame.set("loop.length", t_11);
                        output += "\n                  ";
                        if (runtime.memberLookup(t_13, "href") && runtime.memberLookup(t_13, "text")) {
                          output += '\n                    <li class="govuk-footer__list-item">\n                      <a class="govuk-footer__link" href="';
                          output += runtime.suppressValue(runtime.memberLookup(t_13, "href"), env.opts.autoescape);
                          output += '"';
                          output += runtime.suppressValue((lineno = 17, colno = 43, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(t_13, "attributes")])), env.opts.autoescape);
                          output += ">\n                        ";
                          output += runtime.suppressValue(runtime.memberLookup(t_13, "text"), env.opts.autoescape);
                          output += "\n                      </a>\n                    </li>\n                  ";
                          ;
                        }
                        output += "\n                ";
                        ;
                      }
                    }
                    frame = frame.pop();
                    output += "\n              </ul>\n            ";
                    ;
                  }
                  output += "\n          </div>\n        ";
                  ;
                }
              }
              frame = frame.pop();
              output += '\n      </div>\n      <hr class="govuk-footer__section-break">\n    ';
              ;
            }
            output += '\n    <div class="govuk-footer__meta">\n      <div class="govuk-footer__meta-item govuk-footer__meta-item--grow">\n        ';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "meta")) {
              output += '\n        <h2 class="govuk-visually-hidden">';
              output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "meta"), "visuallyHiddenTitle"), "Support links", true), env.opts.autoescape);
              output += "</h2>\n        ";
              if (env.getFilter("length").call(context, runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "meta"), "items"))) {
                output += '\n        <ul class="govuk-footer__inline-list">\n        ';
                frame = frame.push();
                var t_16 = runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "meta"), "items");
                if (t_16) {
                  t_16 = runtime.fromIterator(t_16);
                  var t_15 = t_16.length;
                  for (var t_14 = 0; t_14 < t_16.length; t_14++) {
                    var t_17 = t_16[t_14];
                    frame.set("item", t_17);
                    frame.set("loop.index", t_14 + 1);
                    frame.set("loop.index0", t_14);
                    frame.set("loop.revindex", t_15 - t_14);
                    frame.set("loop.revindex0", t_15 - t_14 - 1);
                    frame.set("loop.first", t_14 === 0);
                    frame.set("loop.last", t_14 === t_15 - 1);
                    frame.set("loop.length", t_15);
                    output += '\n          <li class="govuk-footer__inline-list-item">\n            <a class="govuk-footer__link" href="';
                    output += runtime.suppressValue(runtime.memberLookup(t_17, "href"), env.opts.autoescape);
                    output += '"';
                    output += runtime.suppressValue((lineno = 39, colno = 33, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(t_17, "attributes")])), env.opts.autoescape);
                    output += ">\n              ";
                    output += runtime.suppressValue(runtime.memberLookup(t_17, "text"), env.opts.autoescape);
                    output += "\n            </a>\n          </li>\n        ";
                    ;
                  }
                }
                frame = frame.pop();
                output += "\n        </ul>\n        ";
                ;
              }
              output += "\n        ";
              if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "meta"), "text") || runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "meta"), "html")) {
                output += '\n        <div class="govuk-footer__meta-custom">\n          ';
                output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "meta"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "meta"), "html"))), 10) : runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "meta"), "text"), env.opts.autoescape);
                output += "\n        </div>\n        ";
                ;
              }
              output += "\n        ";
              ;
            }
            output += "\n        ";
            output += '<svg\n          aria-hidden="true"\n          focusable="false"\n          class="govuk-footer__licence-logo"\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 483.2 195.7"\n          height="17"\n          width="41"\n        >\n          <path\n            fill="currentColor"\n            d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145"\n          />\n        </svg>\n        <span class="govuk-footer__licence-description">\n        ';
            if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "contentLicence"), "html") || runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "contentLicence"), "text")) {
              output += "\n          ";
              output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "contentLicence"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "contentLicence"), "html"))), 10) : runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "contentLicence"), "text"), env.opts.autoescape);
              output += "\n        ";
              ;
            } else {
              output += '\n          All content is available under the\n          <a\n            class="govuk-footer__link"\n            href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"\n            rel="license"\n          >Open Government Licence v3.0</a>, except where otherwise stated\n        ';
              ;
            }
            output += '\n        </span>\n      </div>\n      <div class="govuk-footer__meta-item">\n        <a\n          class="govuk-footer__link govuk-footer__copyright-logo"\n          href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/"\n        >\n        ';
            if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "copyright"), "html") || runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "copyright"), "text")) {
              output += "\n          ";
              output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "copyright"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "copyright"), "html"))), 10) : runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "copyright"), "text"), env.opts.autoescape);
              output += "\n        ";
              ;
            } else {
              output += "\n          \xA9 Crown copyright\n        ";
              ;
            }
            output += "\n        </a>\n      </div>\n    </div>\n  </div>\n</footer>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/header/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/header/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukHeader");
        context.setVariable("govukHeader", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/header/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/header/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            var t_5;
            t_5 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "menuButtonText") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "menuButtonText") : "Menu";
            frame.set("menuButtonText", t_5, true);
            if (frame.topLevel) {
              context.setVariable("menuButtonText", t_5);
            }
            if (frame.topLevel) {
              context.addExport("menuButtonText", t_5);
            }
            var t_6;
            t_6 = function() {
              var output2 = "";
              output2 += '\n<svg\n  focusable="false"\n  role="img"\n  class="govuk-header__logotype"\n  xmlns="http://www.w3.org/2000/svg"\n  viewBox="0 0 152 30"\n  height="30"\n  width="152"\n  aria-label="GOV.UK"\n>\n  <title>GOV.UK</title>\n  <path d="M6.7 12.2c1 .4 2.1-.1 2.5-1s-.1-2.1-1-2.5c-1-.4-2.1.1-2.5 1-.4 1 0 2.1 1 2.5m-4.3 2.5c1 .4 2.1-.1 2.5-1s-.1-2.1-1-2.5c-1-.4-2.1.1-2.5 1-.5 1 0 2.1 1 2.5m-1.3 4.8c1 .4 2.1-.1 2.5-1 .4-1-.1-2.1-1-2.5-1-.4-2.1.1-2.5 1-.4 1 0 2.1 1 2.5m10.4-5.8c1 .4 2.1-.1 2.5-1s-.1-2.1-1-2.5c-1-.4-2.1.1-2.5 1s0 2.1 1 2.5m17.4-1.5c-1 .4-2.1-.1-2.5-1s.1-2.1 1-2.5c1-.4 2.1.1 2.5 1 .5 1 0 2.1-1 2.5m4.3 2.5c-1 .4-2.1-.1-2.5-1s.1-2.1 1-2.5c1-.4 2.1.1 2.5 1 .5 1 0 2.1-1 2.5m1.3 4.8c-1 .4-2.1-.1-2.5-1-.4-1 .1-2.1 1-2.5 1-.4 2.1.1 2.5 1 .4 1 0 2.1-1 2.5m-10.4-5.8c-1 .4-2.1-.1-2.5-1s.1-2.1 1-2.5c1-.4 2.1.1 2.5 1s0 2.1-1 2.5m-5.3-4.9 2.4 1.3V6.5l-2.4.8c-.1-.1-.1-.2-.2-.2s1-3 1-3h-3.4l1 3c-.1.1-.2.1-.2.2-.1.1-2.4-.7-2.4-.7v3.5L17 8.8c-.1.1 0 .2.1.3l-1.4 4.2c-.1.2-.1.4-.1.7 0 1.1.8 2.1 1.9 2.2h.6C19.2 16 20 15.1 20 14c0-.2 0-.4-.1-.7l-1.4-4.2c.2-.1.3-.2.3-.3m-1 20.3c4.6 0 8.9.3 12.8.9 1.1-4.6 2.4-7.2 3.8-9.1l-2.6-.9c.3 1.3.3 1.9 0 2.8-.4-.4-.8-1.2-1.1-2.4l-1.2 4.2c.8-.5 1.4-.9 2-.9-1.2 2.6-2.7 3.2-3.6 3-1.2-.2-1.7-1.3-1.5-2.2.3-1.3 1.6-1.6 2.2-.1 1.2-2.4-.8-3.1-2.1-2.4 1.9-1.9 2.2-3.6.6-5.7-2.2 1.7-2.2 3.3-1.2 5.6-1.3-1.5-3.3-.7-2.5 1.7.9-1.4 2.1-.5 2 .8-.2 1.2-1.7 2.1-3.7 2-2.8-.2-3-2.2-3-3.7.7-.1 1.9.5 3 2l.4-4.4c-1.1 1.2-2.2 1.4-3.3 1.4.4-1.2 2.1-3.1 2.1-3.1h-5.5s1.8 2 2.1 3.1c-1.1 0-2.2-.3-3.3-1.4l.4 4.4c1.1-1.5 2.3-2.1 3-2-.1 1.6-.2 3.5-3 3.7-1.9.2-3.5-.8-3.7-2-.2-1.3 1-2.2 1.9-.8.7-2.4-1.3-3.1-2.6-1.7 1-2.3 1-4-1.2-5.6-1.6 2.1-1.3 3.8.6 5.7-1.3-.7-3.2 0-2.1 2.4.6-1.5 1.9-1.1 2.2.1.2.9-.4 1.9-1.5 2.2-1 .2-2.5-.5-3.7-3 .7 0 1.3.4 2 .9L5 20.4c-.3 1.2-.7 1.9-1.2 2.4-.3-.8-.2-1.5 0-2.8l-2.6.9C2.7 22.8 4 25.4 5.1 30c3.8-.5 8.2-.9 12.7-.9m30.5-11.5c0 .9.1 1.7.3 2.5.2.8.6 1.5 1 2.2.5.6 1 1.1 1.7 1.5.7.4 1.5.6 2.5.6.9 0 1.7-.1 2.3-.4s1.1-.7 1.5-1.1c.4-.4.6-.9.8-1.5.1-.5.2-1 .2-1.5v-.2h-5.3v-3.2h9.4V28H59v-2.5c-.3.4-.6.8-1 1.1-.4.3-.8.6-1.3.9-.5.2-1 .4-1.6.6s-1.2.2-1.8.2c-1.5 0-2.9-.3-4-.8-1.2-.6-2.2-1.3-3-2.3-.8-1-1.4-2.1-1.8-3.4-.3-1.4-.5-2.8-.5-4.3s.2-2.9.7-4.2c.5-1.3 1.1-2.4 2-3.4.9-1 1.9-1.7 3.1-2.3 1.2-.6 2.6-.8 4.1-.8 1 0 1.9.1 2.8.3.9.2 1.7.6 2.4 1s1.4.9 1.9 1.5c.6.6 1 1.3 1.4 2l-3.7 2.1c-.2-.4-.5-.9-.8-1.2-.3-.4-.6-.7-1-1-.4-.3-.8-.5-1.3-.7-.5-.2-1.1-.2-1.7-.2-1 0-1.8.2-2.5.6-.7.4-1.3.9-1.7 1.5-.5.6-.8 1.4-1 2.2-.3.8-.4 1.9-.4 2.7zm36.4-4.3c-.4-1.3-1.1-2.4-2-3.4-.9-1-1.9-1.7-3.1-2.3-1.2-.6-2.6-.8-4.2-.8s-2.9.3-4.2.8c-1.1.6-2.2 1.4-3 2.3-.9 1-1.5 2.1-2 3.4-.4 1.3-.7 2.7-.7 4.2s.2 2.9.7 4.2c.4 1.3 1.1 2.4 2 3.4.9 1 1.9 1.7 3.1 2.3 1.2.6 2.6.8 4.2.8 1.5 0 2.9-.3 4.2-.8 1.2-.6 2.3-1.3 3.1-2.3.9-1 1.5-2.1 2-3.4.4-1.3.7-2.7.7-4.2-.1-1.5-.3-2.9-.8-4.2zM81 17.6c0 1-.1 1.9-.4 2.7-.2.8-.6 1.6-1.1 2.2-.5.6-1.1 1.1-1.7 1.4-.7.3-1.5.5-2.4.5-.9 0-1.7-.2-2.4-.5s-1.3-.8-1.7-1.4c-.5-.6-.8-1.3-1.1-2.2-.2-.8-.4-1.7-.4-2.7v-.1c0-1 .1-1.9.4-2.7.2-.8.6-1.6 1.1-2.2.5-.6 1.1-1.1 1.7-1.4.7-.3 1.5-.5 2.4-.5.9 0 1.7.2 2.4.5s1.3.8 1.7 1.4c.5.6.8 1.3 1.1 2.2.2.8.4 1.7.4 2.7v.1zM92.9 28 87 7h4.7l4 15.7h.1l4-15.7h4.7l-5.9 21h-5.7zm28.8-3.6c.6 0 1.2-.1 1.7-.3.5-.2 1-.4 1.4-.8.4-.4.7-.8.9-1.4.2-.6.3-1.2.3-2v-13h4.1v13.6c0 1.2-.2 2.2-.6 3.1s-1 1.7-1.8 2.4c-.7.7-1.6 1.2-2.7 1.5-1 .4-2.2.5-3.4.5-1.2 0-2.4-.2-3.4-.5-1-.4-1.9-.9-2.7-1.5-.8-.7-1.3-1.5-1.8-2.4-.4-.9-.6-2-.6-3.1V6.9h4.2v13c0 .8.1 1.4.3 2 .2.6.5 1 .9 1.4.4.4.8.6 1.4.8.6.2 1.1.3 1.8.3zm13-17.4h4.2v9.1l7.4-9.1h5.2l-7.2 8.4L152 28h-4.9l-5.5-9.4-2.7 3V28h-4.2V7zm-27.6 16.1c-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7-1.2-2.7-2.7-2.7z"></path>\n</svg>\n';
              ;
              return output2;
            }();
            frame.set("_stEdwardsCrown", t_6, true);
            if (frame.topLevel) {
              context.setVariable("_stEdwardsCrown", t_6);
            }
            var t_7;
            t_7 = function() {
              var output2 = "";
              output2 += '\n<svg\n  focusable="false"\n  role="img"\n  class="govuk-header__logotype"\n  xmlns="http://www.w3.org/2000/svg"\n  viewBox="0 0 148 30"\n  height="30"\n  width="148"\n  aria-label="GOV.UK"\n>\n  <title>GOV.UK</title>\n  <path d="M22.6 10.4c-1 .4-2-.1-2.4-1-.4-.9.1-2 1-2.4.9-.4 2 .1 2.4 1s-.1 2-1 2.4m-5.9 6.7c-.9.4-2-.1-2.4-1-.4-.9.1-2 1-2.4.9-.4 2 .1 2.4 1s-.1 2-1 2.4m10.8-3.7c-1 .4-2-.1-2.4-1-.4-.9.1-2 1-2.4.9-.4 2 .1 2.4 1s0 2-1 2.4m3.3 4.8c-1 .4-2-.1-2.4-1-.4-.9.1-2 1-2.4.9-.4 2 .1 2.4 1s-.1 2-1 2.4M17 4.7l2.3 1.2V2.5l-2.3.7-.2-.2.9-3h-3.4l.9 3-.2.2c-.1.1-2.3-.7-2.3-.7v3.4L15 4.7c.1.1.1.2.2.2l-1.3 4c-.1.2-.1.4-.1.6 0 1.1.8 2 1.9 2.2h.7c1-.2 1.9-1.1 1.9-2.1 0-.2 0-.4-.1-.6l-1.3-4c-.1-.2 0-.2.1-.3m-7.6 5.7c.9.4 2-.1 2.4-1 .4-.9-.1-2-1-2.4-.9-.4-2 .1-2.4 1s0 2 1 2.4m-5 3c.9.4 2-.1 2.4-1 .4-.9-.1-2-1-2.4-.9-.4-2 .1-2.4 1s.1 2 1 2.4m-3.2 4.8c.9.4 2-.1 2.4-1 .4-.9-.1-2-1-2.4-.9-.4-2 .1-2.4 1s0 2 1 2.4m14.8 11c4.4 0 8.6.3 12.3.8 1.1-4.5 2.4-7 3.7-8.8l-2.5-.9c.2 1.3.3 1.9 0 2.7-.4-.4-.8-1.1-1.1-2.3l-1.2 4c.7-.5 1.3-.8 2-.9-1.1 2.5-2.6 3.1-3.5 3-1.1-.2-1.7-1.2-1.5-2.1.3-1.2 1.5-1.5 2.1-.1 1.1-2.3-.8-3-2-2.3 1.9-1.9 2.1-3.5.6-5.6-2.1 1.6-2.1 3.2-1.2 5.5-1.2-1.4-3.2-.6-2.5 1.6.9-1.4 2.1-.5 1.9.8-.2 1.1-1.7 2.1-3.5 1.9-2.7-.2-2.9-2.1-2.9-3.6.7-.1 1.9.5 2.9 1.9l.4-4.3c-1.1 1.1-2.1 1.4-3.2 1.4.4-1.2 2.1-3 2.1-3h-5.4s1.7 1.9 2.1 3c-1.1 0-2.1-.2-3.2-1.4l.4 4.3c1-1.4 2.2-2 2.9-1.9-.1 1.5-.2 3.4-2.9 3.6-1.9.2-3.4-.8-3.5-1.9-.2-1.3 1-2.2 1.9-.8.7-2.3-1.2-3-2.5-1.6.9-2.2.9-3.9-1.2-5.5-1.5 2-1.3 3.7.6 5.6-1.2-.7-3.1 0-2 2.3.6-1.4 1.8-1.1 2.1.1.2.9-.3 1.9-1.5 2.1-.9.2-2.4-.5-3.5-3 .6 0 1.2.3 2 .9l-1.2-4c-.3 1.1-.7 1.9-1.1 2.3-.3-.8-.2-1.4 0-2.7l-2.9.9C1.3 23 2.6 25.5 3.7 30c3.7-.5 7.9-.8 12.3-.8m28.3-11.6c0 .9.1 1.7.3 2.5.2.8.6 1.5 1 2.2.5.6 1 1.1 1.7 1.5.7.4 1.5.6 2.5.6.9 0 1.7-.1 2.3-.4s1.1-.7 1.5-1.1c.4-.4.6-.9.8-1.5.1-.5.2-1 .2-1.5v-.2h-5.3v-3.2h9.4V28H55v-2.5c-.3.4-.6.8-1 1.1-.4.3-.8.6-1.3.9-.5.2-1 .4-1.6.6s-1.2.2-1.8.2c-1.5 0-2.9-.3-4-.8-1.2-.6-2.2-1.3-3-2.3-.8-1-1.4-2.1-1.8-3.4-.3-1.4-.5-2.8-.5-4.3s.2-2.9.7-4.2c.5-1.3 1.1-2.4 2-3.4.9-1 1.9-1.7 3.1-2.3 1.2-.6 2.6-.8 4.1-.8 1 0 1.9.1 2.8.3.9.2 1.7.6 2.4 1s1.4.9 1.9 1.5c.6.6 1 1.3 1.4 2l-3.7 2.1c-.2-.4-.5-.9-.8-1.2-.3-.4-.6-.7-1-1-.4-.3-.8-.5-1.3-.7-.5-.2-1.1-.2-1.7-.2-1 0-1.8.2-2.5.6-.7.4-1.3.9-1.7 1.5-.5.6-.8 1.4-1 2.2-.3.8-.4 1.9-.4 2.7zM71.5 6.8c1.5 0 2.9.3 4.2.8 1.2.6 2.3 1.3 3.1 2.3.9 1 1.5 2.1 2 3.4s.7 2.7.7 4.2-.2 2.9-.7 4.2c-.4 1.3-1.1 2.4-2 3.4-.9 1-1.9 1.7-3.1 2.3-1.2.6-2.6.8-4.2.8s-2.9-.3-4.2-.8c-1.2-.6-2.3-1.3-3.1-2.3-.9-1-1.5-2.1-2-3.4-.4-1.3-.7-2.7-.7-4.2s.2-2.9.7-4.2c.4-1.3 1.1-2.4 2-3.4.9-1 1.9-1.7 3.1-2.3 1.2-.5 2.6-.8 4.2-.8zm0 17.6c.9 0 1.7-.2 2.4-.5s1.3-.8 1.7-1.4c.5-.6.8-1.3 1.1-2.2.2-.8.4-1.7.4-2.7v-.1c0-1-.1-1.9-.4-2.7-.2-.8-.6-1.6-1.1-2.2-.5-.6-1.1-1.1-1.7-1.4-.7-.3-1.5-.5-2.4-.5s-1.7.2-2.4.5-1.3.8-1.7 1.4c-.5.6-.8 1.3-1.1 2.2-.2.8-.4 1.7-.4 2.7v.1c0 1 .1 1.9.4 2.7.2.8.6 1.6 1.1 2.2.5.6 1.1 1.1 1.7 1.4.6.3 1.4.5 2.4.5zM88.9 28 83 7h4.7l4 15.7h.1l4-15.7h4.7l-5.9 21h-5.7zm28.8-3.6c.6 0 1.2-.1 1.7-.3.5-.2 1-.4 1.4-.8.4-.4.7-.8.9-1.4.2-.6.3-1.2.3-2v-13h4.1v13.6c0 1.2-.2 2.2-.6 3.1s-1 1.7-1.8 2.4c-.7.7-1.6 1.2-2.7 1.5-1 .4-2.2.5-3.4.5-1.2 0-2.4-.2-3.4-.5-1-.4-1.9-.9-2.7-1.5-.8-.7-1.3-1.5-1.8-2.4-.4-.9-.6-2-.6-3.1V6.9h4.2v13c0 .8.1 1.4.3 2 .2.6.5 1 .9 1.4.4.4.8.6 1.4.8.6.2 1.1.3 1.8.3zm13-17.4h4.2v9.1l7.4-9.1h5.2l-7.2 8.4L148 28h-4.9l-5.5-9.4-2.7 3V28h-4.2V7zm-27.6 16.1c-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7-1.2-2.7-2.7-2.7z"></path>\n</svg>\n';
              ;
              return output2;
            }();
            frame.set("_tudorCrown", t_7, true);
            if (frame.topLevel) {
              context.setVariable("_tudorCrown", t_7);
            }
            output += '<header class="govuk-header';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
              output += " ";
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
              ;
            }
            output += '" data-module="govuk-header"';
            output += runtime.suppressValue((lineno = 37, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
            output += '>\n  <div class="govuk-header__container ';
            output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "containerClasses"), "govuk-width-container", true), env.opts.autoescape);
            output += '">\n    <div class="govuk-header__logo">\n      <a href="';
            output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "homepageUrl"), "/", true), env.opts.autoescape);
            output += '" class="govuk-header__link govuk-header__link--homepage">';
            output += "\n        ";
            output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "useTudorCrown") !== runtime.contextOrFrameLookup(context, frame, "undefined") && runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "useTudorCrown") === false ? runtime.contextOrFrameLookup(context, frame, "_stEdwardsCrown") : runtime.contextOrFrameLookup(context, frame, "_tudorCrown"))), 8), env.opts.autoescape);
            output += "\n        ";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "productName")) {
              output += '\n        <span class="govuk-header__product-name">\n          ';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "productName"), env.opts.autoescape);
              output += "\n        </span>\n        ";
              ;
            }
            output += "\n      </a>\n    </div>\n  ";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "serviceName") || env.getFilter("length").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigation"))) {
              output += '\n    <div class="govuk-header__content">\n    ';
              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "serviceName")) {
                output += "\n      ";
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "serviceUrl")) {
                  output += '\n      <a href="';
                  output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "serviceUrl"), env.opts.autoescape);
                  output += '" class="govuk-header__link govuk-header__service-name">\n        ';
                  output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "serviceName"), env.opts.autoescape);
                  output += "\n      </a>\n      ";
                  ;
                } else {
                  output += '\n      <span class="govuk-header__service-name">\n        ';
                  output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "serviceName"), env.opts.autoescape);
                  output += "\n      </span>\n      ";
                  ;
                }
                output += "\n    ";
                ;
              }
              output += "\n    ";
              if (env.getFilter("length").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigation"))) {
                output += '\n      <nav aria-label="';
                output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigationLabel"), runtime.contextOrFrameLookup(context, frame, "menuButtonText"), true), env.opts.autoescape);
                output += '" class="govuk-header__navigation';
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigationClasses")) {
                  output += " ";
                  output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigationClasses"), env.opts.autoescape);
                  ;
                }
                output += '">\n        <button type="button" class="govuk-header__menu-button govuk-js-header-toggle" aria-controls="navigation"';
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "menuButtonLabel") && runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "menuButtonLabel") != runtime.contextOrFrameLookup(context, frame, "menuButtonText")) {
                  output += ' aria-label="';
                  output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "menuButtonLabel"), env.opts.autoescape);
                  output += '"';
                  ;
                }
                output += " hidden>\n          ";
                output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "menuButtonText"), env.opts.autoescape);
                output += '\n        </button>\n\n        <ul id="navigation" class="govuk-header__navigation-list">\n        ';
                frame = frame.push();
                var t_10 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigation");
                if (t_10) {
                  t_10 = runtime.fromIterator(t_10);
                  var t_9 = t_10.length;
                  for (var t_8 = 0; t_8 < t_10.length; t_8++) {
                    var t_11 = t_10[t_8];
                    frame.set("item", t_11);
                    frame.set("loop.index", t_8 + 1);
                    frame.set("loop.index0", t_8);
                    frame.set("loop.revindex", t_9 - t_8);
                    frame.set("loop.revindex0", t_9 - t_8 - 1);
                    frame.set("loop.first", t_8 === 0);
                    frame.set("loop.last", t_8 === t_9 - 1);
                    frame.set("loop.length", t_9);
                    output += "\n          ";
                    if (runtime.memberLookup(t_11, "text") || runtime.memberLookup(t_11, "html")) {
                      output += '\n          <li class="govuk-header__navigation-item';
                      if (runtime.memberLookup(t_11, "active")) {
                        output += " govuk-header__navigation-item--active";
                        ;
                      }
                      output += '">\n            ';
                      if (runtime.memberLookup(t_11, "href")) {
                        output += '\n            <a class="govuk-header__link" href="';
                        output += runtime.suppressValue(runtime.memberLookup(t_11, "href"), env.opts.autoescape);
                        output += '"';
                        output += runtime.suppressValue((lineno = 80, colno = 33, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(t_11, "attributes")])), env.opts.autoescape);
                        output += ">\n            ";
                        ;
                      }
                      output += "\n              ";
                      output += runtime.suppressValue(runtime.memberLookup(t_11, "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(t_11, "html"))), 14) : runtime.memberLookup(t_11, "text"), env.opts.autoescape);
                      output += "\n            ";
                      if (runtime.memberLookup(t_11, "href")) {
                        output += "\n            </a>\n            ";
                        ;
                      }
                      output += "\n          </li>\n          ";
                      ;
                    }
                    output += "\n        ";
                    ;
                  }
                }
                frame = frame.pop();
                output += "\n        </ul>\n      </nav>\n    ";
                ;
              }
              output += "\n    </div>\n  ";
              ;
            }
            output += "\n  </div>\n</header>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/hint/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/hint/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukHint");
        context.setVariable("govukHint", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/hint/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/hint/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += "<div";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id")) {
              output += ' id="';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id"), env.opts.autoescape);
              output += '"';
              ;
            }
            output += ' class="govuk-hint';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
              output += " ";
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
              ;
            }
            output += '"';
            output += runtime.suppressValue((lineno = 3, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
            output += ">\n  ";
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html"))), 2) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text"), env.opts.autoescape);
            output += "\n</div>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/input/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/input/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukInput");
        context.setVariable("govukInput", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/input/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/input/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += "\n";
            env.getTemplate("../error-message/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/input/template.njk", false, function(t_6, t_5) {
              if (t_6) {
                cb(t_6);
                return;
              }
              t_5.getExported(function(t_7, t_52) {
                if (t_7) {
                  cb(t_7);
                  return;
                }
                if (Object.prototype.hasOwnProperty.call(t_52, "govukErrorMessage")) {
                  var t_8 = t_52.govukErrorMessage;
                } else {
                  cb(new Error("cannot import 'govukErrorMessage'"));
                  return;
                }
                context.setVariable("govukErrorMessage", t_8);
                output += "\n";
                env.getTemplate("../hint/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/input/template.njk", false, function(t_10, t_9) {
                  if (t_10) {
                    cb(t_10);
                    return;
                  }
                  t_9.getExported(function(t_11, t_92) {
                    if (t_11) {
                      cb(t_11);
                      return;
                    }
                    if (Object.prototype.hasOwnProperty.call(t_92, "govukHint")) {
                      var t_122 = t_92.govukHint;
                    } else {
                      cb(new Error("cannot import 'govukHint'"));
                      return;
                    }
                    context.setVariable("govukHint", t_122);
                    output += "\n";
                    env.getTemplate("../label/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/input/template.njk", false, function(t_14, t_13) {
                      if (t_14) {
                        cb(t_14);
                        return;
                      }
                      t_13.getExported(function(t_15, t_132) {
                        if (t_15) {
                          cb(t_15);
                          return;
                        }
                        if (Object.prototype.hasOwnProperty.call(t_132, "govukLabel")) {
                          var t_16 = t_132.govukLabel;
                        } else {
                          cb(new Error("cannot import 'govukLabel'"));
                          return;
                        }
                        context.setVariable("govukLabel", t_16);
                        var t_17;
                        t_17 = "govuk-input";
                        frame.set("classNames", t_17, true);
                        if (frame.topLevel) {
                          context.setVariable("classNames", t_17);
                        }
                        if (frame.topLevel) {
                          context.addExport("classNames", t_17);
                        }
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
                          output += "\n  ";
                          var t_18;
                          t_18 = runtime.contextOrFrameLookup(context, frame, "classNames") + " " + runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes");
                          frame.set("classNames", t_18, true);
                          if (frame.topLevel) {
                            context.setVariable("classNames", t_18);
                          }
                          if (frame.topLevel) {
                            context.addExport("classNames", t_18);
                          }
                          output += "\n";
                          ;
                        }
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage")) {
                          output += "\n  ";
                          var t_19;
                          t_19 = runtime.contextOrFrameLookup(context, frame, "classNames") + " govuk-input--error";
                          frame.set("classNames", t_19, true);
                          if (frame.topLevel) {
                            context.setVariable("classNames", t_19);
                          }
                          if (frame.topLevel) {
                            context.addExport("classNames", t_19);
                          }
                          output += "\n";
                          ;
                        }
                        var t_20;
                        t_20 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "describedBy") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "describedBy") : runtime.contextOrFrameLookup(context, frame, "undefined");
                        frame.set("describedBy", t_20, true);
                        if (frame.topLevel) {
                          context.setVariable("describedBy", t_20);
                        }
                        if (frame.topLevel) {
                          context.addExport("describedBy", t_20);
                        }
                        var t_21;
                        t_21 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "prefix") && (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "prefix"), "text") || runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "prefix"), "html")) ? true : false;
                        frame.set("hasPrefix", t_21, true);
                        if (frame.topLevel) {
                          context.setVariable("hasPrefix", t_21);
                        }
                        if (frame.topLevel) {
                          context.addExport("hasPrefix", t_21);
                        }
                        var t_22;
                        t_22 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "suffix") && (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "suffix"), "text") || runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "suffix"), "html")) ? true : false;
                        frame.set("hasSuffix", t_22, true);
                        if (frame.topLevel) {
                          context.setVariable("hasSuffix", t_22);
                        }
                        if (frame.topLevel) {
                          context.addExport("hasSuffix", t_22);
                        }
                        var t_23;
                        t_23 = runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInput") && (runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInput"), "text") || runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInput"), "html")) ? true : false;
                        frame.set("hasBeforeInput", t_23, true);
                        if (frame.topLevel) {
                          context.setVariable("hasBeforeInput", t_23);
                        }
                        if (frame.topLevel) {
                          context.addExport("hasBeforeInput", t_23);
                        }
                        var t_24;
                        t_24 = runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput") && (runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput"), "text") || runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput"), "html")) ? true : false;
                        frame.set("hasAfterInput", t_24, true);
                        if (frame.topLevel) {
                          context.setVariable("hasAfterInput", t_24);
                        }
                        if (frame.topLevel) {
                          context.addExport("hasAfterInput", t_24);
                        }
                        var macro_t_25 = runtime.makeMacro(
                          ["params"],
                          [],
                          function(l_params, kwargs) {
                            var callerFrame = frame;
                            frame = new runtime.Frame();
                            kwargs = kwargs || {};
                            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
                              frame.set("caller", kwargs.caller);
                            }
                            frame.set("params", l_params);
                            var t_26 = "";
                            t_26 += "<input";
                            t_26 += runtime.suppressValue((lineno = 27, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [{ "class": runtime.contextOrFrameLookup(context, frame, "classNames"), "id": runtime.memberLookup(l_params, "id"), "name": runtime.memberLookup(l_params, "name"), "type": env.getFilter("default").call(context, runtime.memberLookup(l_params, "type"), "text", true), "spellcheck": { "value": (lineno = 34, colno = 35, runtime.callWrap(runtime.memberLookup([true, false], "includes"), '--expression--["includes"]', context, [runtime.memberLookup(l_params, "spellcheck")])) ? env.getFilter("string").call(context, runtime.memberLookup(l_params, "spellcheck")) : false, "optional": true }, "value": { "value": runtime.memberLookup(l_params, "value"), "optional": true }, "disabled": { "value": runtime.memberLookup(l_params, "disabled"), "optional": true }, "aria-describedby": { "value": runtime.contextOrFrameLookup(context, frame, "describedBy"), "optional": true }, "autocomplete": { "value": runtime.memberLookup(l_params, "autocomplete"), "optional": true }, "autocapitalize": { "value": runtime.memberLookup(l_params, "autocapitalize"), "optional": true }, "pattern": { "value": runtime.memberLookup(l_params, "pattern"), "optional": true }, "inputmode": { "value": runtime.memberLookup(l_params, "inputmode"), "optional": true } }])), env.opts.autoescape);
                            t_26 += runtime.suppressValue((lineno = 68, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [runtime.memberLookup(l_params, "attributes")])), env.opts.autoescape);
                            t_26 += ">";
                            ;
                            frame = callerFrame;
                            return new runtime.SafeString(t_26);
                          }
                        );
                        context.setVariable("_inputElement", macro_t_25);
                        var macro_t_27 = runtime.makeMacro(
                          ["affix", "type"],
                          [],
                          function(l_affix, l_type, kwargs) {
                            var callerFrame = frame;
                            frame = new runtime.Frame();
                            kwargs = kwargs || {};
                            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
                              frame.set("caller", kwargs.caller);
                            }
                            frame.set("affix", l_affix);
                            frame.set("type", l_type);
                            var t_28 = "";
                            t_28 += '\n  <div class="govuk-input__';
                            t_28 += runtime.suppressValue(l_type, env.opts.autoescape);
                            if (runtime.memberLookup(l_affix, "classes")) {
                              t_28 += " ";
                              t_28 += runtime.suppressValue(runtime.memberLookup(l_affix, "classes"), env.opts.autoescape);
                              ;
                            }
                            t_28 += '" aria-hidden="true"';
                            t_28 += runtime.suppressValue((lineno = 72, colno = 132, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [runtime.memberLookup(l_affix, "attributes")])), env.opts.autoescape);
                            t_28 += ">";
                            t_28 += runtime.suppressValue(runtime.memberLookup(l_affix, "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(l_affix, "html"))), 4) : runtime.memberLookup(l_affix, "text"), env.opts.autoescape);
                            t_28 += "</div>";
                            ;
                            frame = callerFrame;
                            return new runtime.SafeString(t_28);
                          }
                        );
                        context.setVariable("_affixItem", macro_t_27);
                        output += '<div class="govuk-form-group';
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage")) {
                          output += " govuk-form-group--error";
                          ;
                        }
                        if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "classes")) {
                          output += " ";
                          output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "classes"), env.opts.autoescape);
                          ;
                        }
                        output += '"';
                        output += runtime.suppressValue((lineno = 78, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "attributes")])), env.opts.autoescape);
                        output += ">\n  ";
                        output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 79, colno = 15, runtime.callWrap(t_16, "govukLabel", context, [{ "html": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "html"), "text": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "text"), "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "classes"), "isPageHeading": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "isPageHeading"), "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "attributes"), "for": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id") }]))), 2), env.opts.autoescape);
                        output += "\n";
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint")) {
                          output += "\n  ";
                          var t_29;
                          t_29 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id") + "-hint";
                          frame.set("hintId", t_29, true);
                          if (frame.topLevel) {
                            context.setVariable("hintId", t_29);
                          }
                          if (frame.topLevel) {
                            context.addExport("hintId", t_29);
                          }
                          output += "\n  ";
                          var t_30;
                          t_30 = runtime.contextOrFrameLookup(context, frame, "describedBy") ? runtime.contextOrFrameLookup(context, frame, "describedBy") + " " + runtime.contextOrFrameLookup(context, frame, "hintId") : runtime.contextOrFrameLookup(context, frame, "hintId");
                          frame.set("describedBy", t_30, true);
                          if (frame.topLevel) {
                            context.setVariable("describedBy", t_30);
                          }
                          if (frame.topLevel) {
                            context.addExport("describedBy", t_30);
                          }
                          output += "\n  ";
                          output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 90, colno = 14, runtime.callWrap(t_122, "govukHint", context, [{ "id": runtime.contextOrFrameLookup(context, frame, "hintId"), "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "classes"), "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "attributes"), "html": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "html"), "text": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "text") }]))), 2), env.opts.autoescape);
                          output += "\n";
                          ;
                        }
                        output += "\n";
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage")) {
                          output += "\n  ";
                          var t_31;
                          t_31 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id") + "-error";
                          frame.set("errorId", t_31, true);
                          if (frame.topLevel) {
                            context.setVariable("errorId", t_31);
                          }
                          if (frame.topLevel) {
                            context.addExport("errorId", t_31);
                          }
                          output += "\n  ";
                          var t_32;
                          t_32 = runtime.contextOrFrameLookup(context, frame, "describedBy") ? runtime.contextOrFrameLookup(context, frame, "describedBy") + " " + runtime.contextOrFrameLookup(context, frame, "errorId") : runtime.contextOrFrameLookup(context, frame, "errorId");
                          frame.set("describedBy", t_32, true);
                          if (frame.topLevel) {
                            context.setVariable("describedBy", t_32);
                          }
                          if (frame.topLevel) {
                            context.addExport("describedBy", t_32);
                          }
                          output += "\n  ";
                          output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 101, colno = 22, runtime.callWrap(t_8, "govukErrorMessage", context, [{ "id": runtime.contextOrFrameLookup(context, frame, "errorId"), "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "classes"), "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "attributes"), "html": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "html"), "text": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "text"), "visuallyHiddenText": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "visuallyHiddenText") }]))), 2), env.opts.autoescape);
                          output += "\n";
                          ;
                        }
                        if (runtime.contextOrFrameLookup(context, frame, "hasPrefix") || runtime.contextOrFrameLookup(context, frame, "hasSuffix") || runtime.contextOrFrameLookup(context, frame, "hasBeforeInput") || runtime.contextOrFrameLookup(context, frame, "hasAfterInput")) {
                          output += '\n  <div class="govuk-input__wrapper';
                          if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "inputWrapper"), "classes")) {
                            output += " ";
                            output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "inputWrapper"), "classes"), env.opts.autoescape);
                            ;
                          }
                          output += '"';
                          output += runtime.suppressValue((lineno = 113, colno = 23, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "inputWrapper"), "attributes")])), env.opts.autoescape);
                          output += ">\n    ";
                          if (runtime.contextOrFrameLookup(context, frame, "hasBeforeInput")) {
                            output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInput"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInput"), "html"))), 4, true) : runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInput"), "text"), env.opts.autoescape);
                            output += "\n    ";
                            ;
                          }
                          output += "\n    ";
                          if (runtime.contextOrFrameLookup(context, frame, "hasPrefix")) {
                            output += runtime.suppressValue(env.getFilter("indent").call(context, (lineno = 118, colno = 20, runtime.callWrap(macro_t_27, "_affixItem", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "prefix"), "prefix"])), 2, true), env.opts.autoescape);
                            output += "\n    ";
                            ;
                          }
                          output += "\n    ";
                          output += runtime.suppressValue((lineno = 120, colno = 20, runtime.callWrap(macro_t_25, "_inputElement", context, [runtime.contextOrFrameLookup(context, frame, "params")])), env.opts.autoescape);
                          output += "\n    ";
                          if (runtime.contextOrFrameLookup(context, frame, "hasSuffix")) {
                            output += runtime.suppressValue(env.getFilter("indent").call(context, (lineno = 122, colno = 20, runtime.callWrap(macro_t_27, "_affixItem", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "suffix"), "suffix"])), 2, true), env.opts.autoescape);
                            output += "\n    ";
                            ;
                          }
                          output += "\n    ";
                          if (runtime.contextOrFrameLookup(context, frame, "hasAfterInput")) {
                            output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput"), "html"))), 4, true) : runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput"), "text"), env.opts.autoescape);
                            output += "\n    ";
                            ;
                          }
                          output += "\n  </div>\n";
                          ;
                        } else {
                          output += "\n  ";
                          output += runtime.suppressValue((lineno = 129, colno = 18, runtime.callWrap(macro_t_25, "_inputElement", context, [runtime.contextOrFrameLookup(context, frame, "params")])), env.opts.autoescape);
                          output += "\n";
                          ;
                        }
                        output += "\n</div>\n";
                        if (parentTemplate) {
                          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
                        } else {
                          cb(null, output);
                        }
                      });
                    });
                  });
                });
              });
            });
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/inset-text/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/inset-text/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukInsetText");
        context.setVariable("govukInsetText", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/inset-text/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/inset-text/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += "<div";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id")) {
              output += ' id="';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id"), env.opts.autoescape);
              output += '"';
              ;
            }
            output += ' class="govuk-inset-text';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
              output += " ";
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
              ;
            }
            output += '"';
            output += runtime.suppressValue((lineno = 3, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
            output += ">\n  ";
            output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "caller") ? (lineno = 4, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html"))), 2) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text"), env.opts.autoescape);
            output += "\n</div>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/label/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/label/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukLabel");
        context.setVariable("govukLabel", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/label/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/label/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html") || runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text")) {
              output += "\n";
              var t_5;
              t_5 = function() {
                var output2 = "";
                output2 += '\n<label class="govuk-label';
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
                  output2 += " ";
                  output2 += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
                  ;
                }
                output2 += '"';
                output2 += runtime.suppressValue((lineno = 5, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "for")) {
                  output2 += ' for="';
                  output2 += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "for"), env.opts.autoescape);
                  output2 += '"';
                  ;
                }
                output2 += ">\n  ";
                output2 += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html"))), 2) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text"), env.opts.autoescape);
                output2 += "\n</label>\n";
                ;
                return output2;
              }();
              frame.set("labelHtml", t_5, true);
              if (frame.topLevel) {
                context.setVariable("labelHtml", t_5);
              }
              if (frame.topLevel) {
                context.addExport("labelHtml", t_5);
              }
              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "isPageHeading")) {
                output += '\n<h1 class="govuk-label-wrapper">\n  ';
                output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "labelHtml"))), 2), env.opts.autoescape);
                output += "\n</h1>\n";
                ;
              } else {
                output += "\n";
                output += runtime.suppressValue(env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "labelHtml"))), env.opts.autoescape);
                output += "\n";
                ;
              }
              output += "\n";
              ;
            }
            output += "\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/notification-banner/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/notification-banner/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukNotificationBanner");
        context.setVariable("govukNotificationBanner", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/notification-banner/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/notification-banner/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "type") == "success") {
              output += "\n  ";
              var t_5;
              t_5 = true;
              frame.set("successBanner", t_5, true);
              if (frame.topLevel) {
                context.setVariable("successBanner", t_5);
              }
              if (frame.topLevel) {
                context.addExport("successBanner", t_5);
              }
              output += "\n";
              ;
            }
            if (runtime.contextOrFrameLookup(context, frame, "successBanner")) {
              output += "\n  ";
              var t_6;
              t_6 = "govuk-notification-banner--" + runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "type");
              frame.set("typeClass", t_6, true);
              if (frame.topLevel) {
                context.setVariable("typeClass", t_6);
              }
              if (frame.topLevel) {
                context.addExport("typeClass", t_6);
              }
              output += "\n";
              ;
            }
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "role")) {
              output += "\n  ";
              var t_7;
              t_7 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "role");
              frame.set("role", t_7, true);
              if (frame.topLevel) {
                context.setVariable("role", t_7);
              }
              if (frame.topLevel) {
                context.addExport("role", t_7);
              }
              output += "\n";
              ;
            } else {
              if (runtime.contextOrFrameLookup(context, frame, "successBanner")) {
                var t_8;
                t_8 = "alert";
                frame.set("role", t_8, true);
                if (frame.topLevel) {
                  context.setVariable("role", t_8);
                }
                if (frame.topLevel) {
                  context.addExport("role", t_8);
                }
                output += "\n";
                ;
              } else {
                var t_9;
                t_9 = "region";
                frame.set("role", t_9, true);
                if (frame.topLevel) {
                  context.setVariable("role", t_9);
                }
                if (frame.topLevel) {
                  context.addExport("role", t_9);
                }
                output += "\n";
                ;
              }
              ;
            }
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "titleHtml")) {
              output += "\n  ";
              var t_10;
              t_10 = env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "titleHtml"));
              frame.set("title", t_10, true);
              if (frame.topLevel) {
                context.setVariable("title", t_10);
              }
              if (frame.topLevel) {
                context.addExport("title", t_10);
              }
              ;
            } else {
              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "titleText")) {
                output += "\n  ";
                var t_11;
                t_11 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "titleText");
                frame.set("title", t_11, true);
                if (frame.topLevel) {
                  context.setVariable("title", t_11);
                }
                if (frame.topLevel) {
                  context.addExport("title", t_11);
                }
                ;
              } else {
                if (runtime.contextOrFrameLookup(context, frame, "successBanner")) {
                  output += "\n  ";
                  var t_122;
                  t_122 = "Success";
                  frame.set("title", t_122, true);
                  if (frame.topLevel) {
                    context.setVariable("title", t_122);
                  }
                  if (frame.topLevel) {
                    context.addExport("title", t_122);
                  }
                  ;
                } else {
                  output += "\n  ";
                  var t_13;
                  t_13 = "Important";
                  frame.set("title", t_13, true);
                  if (frame.topLevel) {
                    context.setVariable("title", t_13);
                  }
                  if (frame.topLevel) {
                    context.addExport("title", t_13);
                  }
                  ;
                }
                ;
              }
              ;
            }
            output += '<div class="govuk-notification-banner';
            if (runtime.contextOrFrameLookup(context, frame, "typeClass")) {
              output += " ";
              output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "typeClass"), env.opts.autoescape);
              ;
            }
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
              output += " ";
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
              ;
            }
            output += '" role="';
            output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "role"), env.opts.autoescape);
            output += '" aria-labelledby="';
            output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "titleId"), "govuk-notification-banner-title", true), env.opts.autoescape);
            output += '" data-module="govuk-notification-banner"';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "disableAutoFocus") !== runtime.contextOrFrameLookup(context, frame, "undefined")) {
              output += ' data-disable-auto-focus="';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "disableAutoFocus"), env.opts.autoescape);
              output += '"';
              ;
            }
            output += runtime.suppressValue((lineno = 32, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
            output += '>\n  <div class="govuk-notification-banner__header">\n    <h';
            output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "titleHeadingLevel"), 2, true), env.opts.autoescape);
            output += ' class="govuk-notification-banner__title" id="';
            output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "titleId"), "govuk-notification-banner-title", true), env.opts.autoescape);
            output += '">\n      ';
            output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
            output += "\n    </h";
            output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "titleHeadingLevel"), 2, true), env.opts.autoescape);
            output += '>\n  </div>\n  <div class="govuk-notification-banner__content">\n  ';
            if (runtime.contextOrFrameLookup(context, frame, "caller") || runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html")) {
              output += "\n    ";
              output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "caller") ? (lineno = 40, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])) : env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html"))), 4), env.opts.autoescape);
              output += "\n  ";
              ;
            } else {
              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text")) {
                output += "\n    ";
                output += '<p class="govuk-notification-banner__heading">\n      ';
                output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text")), 6), env.opts.autoescape);
                output += "\n    </p>\n  ";
                ;
              }
              ;
            }
            output += "\n  </div>\n</div>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/pagination/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/pagination/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukPagination");
        context.setVariable("govukPagination", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/pagination/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/pagination/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            var t_5;
            t_5 = !runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "items") && (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "next") || runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "previous"));
            frame.set("blockLevel", t_5, true);
            if (frame.topLevel) {
              context.setVariable("blockLevel", t_5);
            }
            if (frame.topLevel) {
              context.addExport("blockLevel", t_5);
            }
            var t_6;
            t_6 = function() {
              var output2 = "";
              output2 += '\n  <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">\n    <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>\n  </svg>';
              ;
              return output2;
            }();
            frame.set("arrowPrevious", t_6, true);
            if (frame.topLevel) {
              context.setVariable("arrowPrevious", t_6);
            }
            if (frame.topLevel) {
              context.addExport("arrowPrevious", t_6);
            }
            var t_7;
            t_7 = function() {
              var output2 = "";
              output2 += '\n  <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">\n    <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>\n  </svg>';
              ;
              return output2;
            }();
            frame.set("arrowNext", t_7, true);
            if (frame.topLevel) {
              context.setVariable("arrowNext", t_7);
            }
            if (frame.topLevel) {
              context.addExport("arrowNext", t_7);
            }
            var macro_t_8 = runtime.makeMacro(
              ["link"],
              ["type"],
              function(l_link, kwargs) {
                var callerFrame = frame;
                frame = new runtime.Frame();
                kwargs = kwargs || {};
                if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
                  frame.set("caller", kwargs.caller);
                }
                frame.set("link", l_link);
                frame.set("type", Object.prototype.hasOwnProperty.call(kwargs, "type") ? kwargs["type"] : "next");
                var t_9 = "";
                t_9 += "\n  ";
                var t_10;
                t_10 = runtime.contextOrFrameLookup(context, frame, "type") == "prev" ? runtime.contextOrFrameLookup(context, frame, "arrowPrevious") : runtime.contextOrFrameLookup(context, frame, "arrowNext");
                frame.set("arrowType", t_10, true);
                if (frame.topLevel) {
                  context.setVariable("arrowType", t_10);
                }
                if (frame.topLevel) {
                  context.addExport("arrowType", t_10);
                }
                t_9 += '\n  <div class="govuk-pagination__';
                t_9 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "type"), env.opts.autoescape);
                t_9 += '">\n    <a class="govuk-link govuk-pagination__link" href="';
                t_9 += runtime.suppressValue(runtime.memberLookup(l_link, "href"), env.opts.autoescape);
                t_9 += '" rel="';
                t_9 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "type"), env.opts.autoescape);
                t_9 += '"';
                t_9 += runtime.suppressValue((lineno = 20, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [runtime.memberLookup(l_link, "attributes")])), env.opts.autoescape);
                t_9 += ">\n      ";
                if (runtime.contextOrFrameLookup(context, frame, "blockLevel") || runtime.contextOrFrameLookup(context, frame, "type") == "prev") {
                  t_9 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "arrowType")), 4, true), env.opts.autoescape);
                  t_9 += "\n      ";
                  ;
                }
                t_9 += '\n      <span class="govuk-pagination__link-title';
                if (runtime.contextOrFrameLookup(context, frame, "blockLevel") && !runtime.memberLookup(l_link, "labelText")) {
                  t_9 += " govuk-pagination__link-title--decorated";
                  ;
                }
                t_9 += '">\n        ';
                t_9 += runtime.suppressValue(env.getFilter("trim").call(context, env.getFilter("safe").call(context, (lineno = 25, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])))), env.opts.autoescape);
                t_9 += "\n      </span>\n      ";
                if (runtime.memberLookup(l_link, "labelText") && runtime.contextOrFrameLookup(context, frame, "blockLevel")) {
                  t_9 += '\n      <span class="govuk-visually-hidden">:</span>\n      <span class="govuk-pagination__link-label">';
                  t_9 += runtime.suppressValue(runtime.memberLookup(l_link, "labelText"), env.opts.autoescape);
                  t_9 += "</span>\n      ";
                  ;
                }
                t_9 += "\n      ";
                if (!runtime.contextOrFrameLookup(context, frame, "blockLevel") && runtime.contextOrFrameLookup(context, frame, "type") == "next") {
                  t_9 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "arrowType")), 4, true), env.opts.autoescape);
                  t_9 += "\n      ";
                  ;
                }
                t_9 += "\n    </a>\n  </div>\n";
                ;
                frame = callerFrame;
                return new runtime.SafeString(t_9);
              }
            );
            context.setVariable("_arrowLink", macro_t_8);
            var macro_t_11 = runtime.makeMacro(
              ["item"],
              [],
              function(l_item, kwargs) {
                var callerFrame = frame;
                frame = new runtime.Frame();
                kwargs = kwargs || {};
                if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
                  frame.set("caller", kwargs.caller);
                }
                frame.set("item", l_item);
                var t_122 = "";
                t_122 += '<li class="govuk-pagination__item';
                if (runtime.memberLookup(l_item, "current")) {
                  t_122 += " govuk-pagination__item--current";
                  ;
                }
                if (runtime.memberLookup(l_item, "ellipsis")) {
                  t_122 += " govuk-pagination__item--ellipses";
                  ;
                }
                t_122 += '">\n  ';
                if (runtime.memberLookup(l_item, "ellipsis")) {
                  t_122 += "\n    &ctdot;\n  ";
                  ;
                } else {
                  t_122 += '\n    <a class="govuk-link govuk-pagination__link" href="';
                  t_122 += runtime.suppressValue(runtime.memberLookup(l_item, "href"), env.opts.autoescape);
                  t_122 += '" aria-label="';
                  t_122 += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(l_item, "visuallyHiddenText"), "Page " + runtime.memberLookup(l_item, "number")), env.opts.autoescape);
                  t_122 += '"';
                  if (runtime.memberLookup(l_item, "current")) {
                    t_122 += ' aria-current="page"';
                    ;
                  }
                  t_122 += runtime.suppressValue((lineno = 45, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [runtime.memberLookup(l_item, "attributes")])), env.opts.autoescape);
                  t_122 += ">\n      ";
                  t_122 += runtime.suppressValue(runtime.memberLookup(l_item, "number"), env.opts.autoescape);
                  t_122 += "\n    </a>\n  ";
                  ;
                }
                t_122 += "\n  </li>";
                ;
                frame = callerFrame;
                return new runtime.SafeString(t_122);
              }
            );
            context.setVariable("_pageItem", macro_t_11);
            output += '<nav class="govuk-pagination';
            if (runtime.contextOrFrameLookup(context, frame, "blockLevel")) {
              output += " govuk-pagination--block";
              ;
            }
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
              output += " ";
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
              ;
            }
            output += '" aria-label="';
            output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "landmarkLabel"), "Pagination", true), env.opts.autoescape);
            output += '"';
            output += runtime.suppressValue((lineno = 53, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
            output += ">\n  ";
            var t_13;
            t_13 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "previous");
            frame.set("previous", t_13, true);
            if (frame.topLevel) {
              context.setVariable("previous", t_13);
            }
            if (frame.topLevel) {
              context.addExport("previous", t_13);
            }
            output += "\n  ";
            var t_14;
            t_14 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "next");
            frame.set("next", t_14, true);
            if (frame.topLevel) {
              context.setVariable("next", t_14);
            }
            if (frame.topLevel) {
              context.addExport("next", t_14);
            }
            if (runtime.contextOrFrameLookup(context, frame, "previous") && runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "previous"), "href")) {
              output += "\n    ";
              output += runtime.suppressValue((lineno = 58, colno = 22, runtime.callWrap(macro_t_8, "_arrowLink", context, [runtime.contextOrFrameLookup(context, frame, "previous"), "prev", runtime.makeKeywordArgs({ "caller": function() {
                var macro_t_15 = runtime.makeMacro(
                  [],
                  [],
                  function(kwargs) {
                    var callerFrame = frame;
                    frame = frame.push(true);
                    kwargs = kwargs || {};
                    if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
                      frame.set("caller", kwargs.caller);
                    }
                    var t_16 = "";
                    t_16 += "\n      ";
                    if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "previous"), "html") || runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "previous"), "text")) {
                      t_16 += "\n        ";
                      t_16 += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "previous"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "previous"), "html"))), 8) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "previous"), "text"), env.opts.autoescape);
                      t_16 += "\n      ";
                      ;
                    } else {
                      t_16 += '\n        Previous<span class="govuk-visually-hidden"> page</span>\n      ';
                      ;
                    }
                    t_16 += "\n    ";
                    ;
                    frame = frame.pop();
                    return new runtime.SafeString(t_16);
                  }
                );
                return macro_t_15;
              }() })])), env.opts.autoescape);
              ;
            }
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "items")) {
              output += '\n  <ul class="govuk-pagination__list">\n  ';
              frame = frame.push();
              var t_19 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "items");
              if (t_19) {
                t_19 = runtime.fromIterator(t_19);
                var t_18 = t_19.length;
                for (var t_17 = 0; t_17 < t_19.length; t_17++) {
                  var t_20 = t_19[t_17];
                  frame.set("item", t_20);
                  frame.set("loop.index", t_17 + 1);
                  frame.set("loop.index0", t_17);
                  frame.set("loop.revindex", t_18 - t_17);
                  frame.set("loop.revindex0", t_18 - t_17 - 1);
                  frame.set("loop.first", t_17 === 0);
                  frame.set("loop.last", t_17 === t_18 - 1);
                  frame.set("loop.length", t_18);
                  output += "\n    ";
                  output += runtime.suppressValue(env.getFilter("indent").call(context, (lineno = 70, colno = 16, runtime.callWrap(macro_t_11, "_pageItem", context, [t_20])), 2), env.opts.autoescape);
                  output += "\n  ";
                  ;
                }
              }
              frame = frame.pop();
              output += "\n  </ul>\n  ";
              ;
            }
            if (runtime.contextOrFrameLookup(context, frame, "next") && runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "next"), "href")) {
              output += "\n    ";
              output += runtime.suppressValue((lineno = 76, colno = 22, runtime.callWrap(macro_t_8, "_arrowLink", context, [runtime.contextOrFrameLookup(context, frame, "next"), "next", runtime.makeKeywordArgs({ "caller": function() {
                var macro_t_21 = runtime.makeMacro(
                  [],
                  [],
                  function(kwargs) {
                    var callerFrame = frame;
                    frame = frame.push(true);
                    kwargs = kwargs || {};
                    if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
                      frame.set("caller", kwargs.caller);
                    }
                    var t_22 = "";
                    t_22 += "\n      ";
                    if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "next"), "html") || runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "next"), "text")) {
                      t_22 += "\n        ";
                      t_22 += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "next"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "next"), "html"))), 8) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "next"), "text"), env.opts.autoescape);
                      t_22 += "\n      ";
                      ;
                    } else {
                      t_22 += '\n        Next<span class="govuk-visually-hidden"> page</span>\n      ';
                      ;
                    }
                    t_22 += "\n    ";
                    ;
                    frame = frame.pop();
                    return new runtime.SafeString(t_22);
                  }
                );
                return macro_t_21;
              }() })])), env.opts.autoescape);
              output += "\n  ";
              ;
            }
            output += "\n</nav>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/panel/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/panel/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukPanel");
        context.setVariable("govukPanel", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/panel/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/panel/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            var t_5;
            t_5 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "headingLevel") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "headingLevel") : 1;
            frame.set("headingLevel", t_5, true);
            if (frame.topLevel) {
              context.setVariable("headingLevel", t_5);
            }
            if (frame.topLevel) {
              context.addExport("headingLevel", t_5);
            }
            output += '<div class="govuk-panel govuk-panel--confirmation';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
              output += " ";
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
              ;
            }
            output += '"';
            output += runtime.suppressValue((lineno = 6, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
            output += ">\n  <h";
            output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "headingLevel"), env.opts.autoescape);
            output += ' class="govuk-panel__title">\n    ';
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "titleHtml") ? env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "titleHtml")) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "titleText"), env.opts.autoescape);
            output += "\n  </h";
            output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "headingLevel"), env.opts.autoescape);
            output += ">\n  ";
            if (runtime.contextOrFrameLookup(context, frame, "caller") || runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html") || runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text")) {
              output += '\n  <div class="govuk-panel__body">\n    ';
              output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "caller") ? (lineno = 12, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html"))), 4) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text"), env.opts.autoescape);
              output += "\n  </div>\n  ";
              ;
            }
            output += "\n</div>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/password-input/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/password-input/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukPasswordInput");
        context.setVariable("govukPasswordInput", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/password-input/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/password-input/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            env.getTemplate("../../macros/i18n.njk", false, "node_modules/govuk-frontend/dist/govuk/components/password-input/template.njk", false, function(t_6, t_5) {
              if (t_6) {
                cb(t_6);
                return;
              }
              t_5.getExported(function(t_7, t_52) {
                if (t_7) {
                  cb(t_7);
                  return;
                }
                if (Object.prototype.hasOwnProperty.call(t_52, "govukI18nAttributes")) {
                  var t_8 = t_52.govukI18nAttributes;
                } else {
                  cb(new Error("cannot import 'govukI18nAttributes'"));
                  return;
                }
                context.setVariable("govukI18nAttributes", t_8);
                env.getTemplate("../button/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/password-input/template.njk", false, function(t_10, t_9) {
                  if (t_10) {
                    cb(t_10);
                    return;
                  }
                  t_9.getExported(function(t_11, t_92) {
                    if (t_11) {
                      cb(t_11);
                      return;
                    }
                    if (Object.prototype.hasOwnProperty.call(t_92, "govukButton")) {
                      var t_122 = t_92.govukButton;
                    } else {
                      cb(new Error("cannot import 'govukButton'"));
                      return;
                    }
                    context.setVariable("govukButton", t_122);
                    env.getTemplate("../input/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/password-input/template.njk", false, function(t_14, t_13) {
                      if (t_14) {
                        cb(t_14);
                        return;
                      }
                      t_13.getExported(function(t_15, t_132) {
                        if (t_15) {
                          cb(t_15);
                          return;
                        }
                        if (Object.prototype.hasOwnProperty.call(t_132, "govukInput")) {
                          var t_16 = t_132.govukInput;
                        } else {
                          cb(new Error("cannot import 'govukInput'"));
                          return;
                        }
                        context.setVariable("govukInput", t_16);
                        var t_17;
                        t_17 = function() {
                          var output2 = "";
                          output2 += runtime.suppressValue(env.getFilter("safe").call(context, ' data-module="govuk-password-input"'), env.opts.autoescape);
                          output2 += runtime.suppressValue((lineno = 9, colno = 25, runtime.callWrap(t_8, "govukI18nAttributes", context, [{ "key": "show-password", "message": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "showPasswordText") }])), env.opts.autoescape);
                          output2 += runtime.suppressValue((lineno = 14, colno = 25, runtime.callWrap(t_8, "govukI18nAttributes", context, [{ "key": "hide-password", "message": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hidePasswordText") }])), env.opts.autoescape);
                          output2 += runtime.suppressValue((lineno = 19, colno = 25, runtime.callWrap(t_8, "govukI18nAttributes", context, [{ "key": "show-password-aria-label", "message": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "showPasswordAriaLabelText") }])), env.opts.autoescape);
                          output2 += runtime.suppressValue((lineno = 24, colno = 25, runtime.callWrap(t_8, "govukI18nAttributes", context, [{ "key": "hide-password-aria-label", "message": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hidePasswordAriaLabelText") }])), env.opts.autoescape);
                          output2 += runtime.suppressValue((lineno = 29, colno = 25, runtime.callWrap(t_8, "govukI18nAttributes", context, [{ "key": "password-shown-announcement", "message": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "passwordShownAnnouncementText") }])), env.opts.autoescape);
                          output2 += runtime.suppressValue((lineno = 34, colno = 25, runtime.callWrap(t_8, "govukI18nAttributes", context, [{ "key": "password-hidden-announcement", "message": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "passwordHiddenAnnouncementText") }])), env.opts.autoescape);
                          ;
                          return output2;
                        }();
                        frame.set("attributesHtml", t_17, true);
                        if (frame.topLevel) {
                          context.setVariable("attributesHtml", t_17);
                        }
                        if (frame.topLevel) {
                          context.addExport("attributesHtml", t_17);
                        }
                        frame = frame.push();
                        var t_20 = runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "attributes");
                        if (t_20) {
                          t_20 = runtime.fromIterator(t_20);
                          var t_18;
                          if (runtime.isArray(t_20)) {
                            var t_19 = t_20.length;
                            for (t_18 = 0; t_18 < t_20.length; t_18++) {
                              var t_21 = t_20[t_18][0];
                              frame.set("[object Object]", t_20[t_18][0]);
                              var t_22 = t_20[t_18][1];
                              frame.set("[object Object]", t_20[t_18][1]);
                              frame.set("loop.index", t_18 + 1);
                              frame.set("loop.index0", t_18);
                              frame.set("loop.revindex", t_19 - t_18);
                              frame.set("loop.revindex0", t_19 - t_18 - 1);
                              frame.set("loop.first", t_18 === 0);
                              frame.set("loop.last", t_18 === t_19 - 1);
                              frame.set("loop.length", t_19);
                              output += "\n  ";
                              var t_23;
                              t_23 = runtime.contextOrFrameLookup(context, frame, "attributesHtml") + " " + env.getFilter("escape").call(context, t_21) + '="' + env.getFilter("escape").call(context, t_22) + '"';
                              frame.set("attributesHtml", t_23, true);
                              if (frame.topLevel) {
                                context.setVariable("attributesHtml", t_23);
                              }
                              if (frame.topLevel) {
                                context.addExport("attributesHtml", t_23);
                              }
                              output += "\n";
                              ;
                            }
                          } else {
                            t_18 = -1;
                            var t_19 = runtime.keys(t_20).length;
                            for (var t_24 in t_20) {
                              t_18++;
                              var t_25 = t_20[t_24];
                              frame.set("name", t_24);
                              frame.set("value", t_25);
                              frame.set("loop.index", t_18 + 1);
                              frame.set("loop.index0", t_18);
                              frame.set("loop.revindex", t_19 - t_18);
                              frame.set("loop.revindex0", t_19 - t_18 - 1);
                              frame.set("loop.first", t_18 === 0);
                              frame.set("loop.last", t_18 === t_19 - 1);
                              frame.set("loop.length", t_19);
                              output += "\n  ";
                              var t_26;
                              t_26 = runtime.contextOrFrameLookup(context, frame, "attributesHtml") + " " + env.getFilter("escape").call(context, t_24) + '="' + env.getFilter("escape").call(context, t_25) + '"';
                              frame.set("attributesHtml", t_26, true);
                              if (frame.topLevel) {
                                context.setVariable("attributesHtml", t_26);
                              }
                              if (frame.topLevel) {
                                context.addExport("attributesHtml", t_26);
                              }
                              output += "\n";
                              ;
                            }
                          }
                        }
                        frame = frame.pop();
                        var t_27;
                        t_27 = function() {
                          var output2 = "";
                          output2 += "\n";
                          output2 += runtime.suppressValue(env.getFilter("trim").call(context, (lineno = 46, colno = 14, runtime.callWrap(t_122, "govukButton", context, [{ "type": "button", "classes": "govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle" + (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "button"), "classes") ? " " + runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "button"), "classes") : ""), "text": env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "showPasswordText"), "Show"), "attributes": { "aria-controls": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id"), "aria-label": env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "showPasswordAriaLabelText"), "Show password"), "hidden": { "value": true, "optional": true } } }]))), env.opts.autoescape);
                          output2 += "\n";
                          if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput")) {
                            output2 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput"), "html") ? env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput"), "html"))) : runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput"), "text"), env.opts.autoescape);
                            output2 += "\n";
                            ;
                          }
                          ;
                          return output2;
                        }();
                        frame.set("buttonHtml", t_27, true);
                        if (frame.topLevel) {
                          context.setVariable("buttonHtml", t_27);
                        }
                        if (frame.topLevel) {
                          context.addExport("buttonHtml", t_27);
                        }
                        output += runtime.suppressValue(env.getFilter("trim").call(context, (lineno = 64, colno = 13, runtime.callWrap(t_16, "govukInput", context, [{ "formGroup": { "classes": "govuk-password-input" + (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "classes") ? " " + runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "classes") : ""), "attributes": runtime.contextOrFrameLookup(context, frame, "attributesHtml"), "beforeInput": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInput"), "afterInput": { "html": runtime.contextOrFrameLookup(context, frame, "buttonHtml") } }, "inputWrapper": { "classes": "govuk-password-input__wrapper" }, "label": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "hint": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "classes": "govuk-password-input__input govuk-js-password-input-input" + (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes") ? " " + runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes") : ""), "errorMessage": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "id": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id"), "name": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "name"), "type": "password", "spellcheck": false, "autocapitalize": "none", "autocomplete": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "autocomplete") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "autocomplete") : "current-password", "value": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "value"), "disabled": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "disabled"), "describedBy": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "describedBy"), "attributes": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes") }]))), env.opts.autoescape);
                        output += "\n";
                        if (parentTemplate) {
                          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
                        } else {
                          cb(null, output);
                        }
                      });
                    });
                  });
                });
              });
            });
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/phase-banner/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/phase-banner/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukPhaseBanner");
        context.setVariable("govukPhaseBanner", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/phase-banner/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/phase-banner/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += "\n";
            env.getTemplate("../tag/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/phase-banner/template.njk", false, function(t_6, t_5) {
              if (t_6) {
                cb(t_6);
                return;
              }
              t_5.getExported(function(t_7, t_52) {
                if (t_7) {
                  cb(t_7);
                  return;
                }
                if (Object.prototype.hasOwnProperty.call(t_52, "govukTag")) {
                  var t_8 = t_52.govukTag;
                } else {
                  cb(new Error("cannot import 'govukTag'"));
                  return;
                }
                context.setVariable("govukTag", t_8);
                output += '<div class="govuk-phase-banner';
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
                  output += " ";
                  output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
                  ;
                }
                output += '"';
                output += runtime.suppressValue((lineno = 5, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
                output += '>\n  <p class="govuk-phase-banner__content">\n    ';
                output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 7, colno = 15, runtime.callWrap(t_8, "govukTag", context, [{ "text": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "tag"), "text"), "html": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "tag"), "html"), "classes": "govuk-phase-banner__content__tag" + (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "tag"), "classes") ? " " + runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "tag"), "classes") : "") }]))), 4), env.opts.autoescape);
                output += '\n    <span class="govuk-phase-banner__text">\n      ';
                output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html"))), 6) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text"), env.opts.autoescape);
                output += "\n    </span>\n  </p>\n</div>\n";
                if (parentTemplate) {
                  parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
                } else {
                  cb(null, output);
                }
              });
            });
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/radios/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/radios/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukRadios");
        context.setVariable("govukRadios", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/radios/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/radios/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += "\n";
            env.getTemplate("../error-message/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/radios/template.njk", false, function(t_6, t_5) {
              if (t_6) {
                cb(t_6);
                return;
              }
              t_5.getExported(function(t_7, t_52) {
                if (t_7) {
                  cb(t_7);
                  return;
                }
                if (Object.prototype.hasOwnProperty.call(t_52, "govukErrorMessage")) {
                  var t_8 = t_52.govukErrorMessage;
                } else {
                  cb(new Error("cannot import 'govukErrorMessage'"));
                  return;
                }
                context.setVariable("govukErrorMessage", t_8);
                output += "\n";
                env.getTemplate("../fieldset/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/radios/template.njk", false, function(t_10, t_9) {
                  if (t_10) {
                    cb(t_10);
                    return;
                  }
                  t_9.getExported(function(t_11, t_92) {
                    if (t_11) {
                      cb(t_11);
                      return;
                    }
                    if (Object.prototype.hasOwnProperty.call(t_92, "govukFieldset")) {
                      var t_122 = t_92.govukFieldset;
                    } else {
                      cb(new Error("cannot import 'govukFieldset'"));
                      return;
                    }
                    context.setVariable("govukFieldset", t_122);
                    output += "\n";
                    env.getTemplate("../hint/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/radios/template.njk", false, function(t_14, t_13) {
                      if (t_14) {
                        cb(t_14);
                        return;
                      }
                      t_13.getExported(function(t_15, t_132) {
                        if (t_15) {
                          cb(t_15);
                          return;
                        }
                        if (Object.prototype.hasOwnProperty.call(t_132, "govukHint")) {
                          var t_16 = t_132.govukHint;
                        } else {
                          cb(new Error("cannot import 'govukHint'"));
                          return;
                        }
                        context.setVariable("govukHint", t_16);
                        output += "\n";
                        env.getTemplate("../label/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/radios/template.njk", false, function(t_18, t_17) {
                          if (t_18) {
                            cb(t_18);
                            return;
                          }
                          t_17.getExported(function(t_19, t_172) {
                            if (t_19) {
                              cb(t_19);
                              return;
                            }
                            if (Object.prototype.hasOwnProperty.call(t_172, "govukLabel")) {
                              var t_20 = t_172.govukLabel;
                            } else {
                              cb(new Error("cannot import 'govukLabel'"));
                              return;
                            }
                            context.setVariable("govukLabel", t_20);
                            var t_21;
                            t_21 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "idPrefix") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "idPrefix") : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "name");
                            frame.set("idPrefix", t_21, true);
                            if (frame.topLevel) {
                              context.setVariable("idPrefix", t_21);
                            }
                            if (frame.topLevel) {
                              context.addExport("idPrefix", t_21);
                            }
                            var t_22;
                            t_22 = runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "fieldset"), "describedBy") ? runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "fieldset"), "describedBy") : "";
                            frame.set("describedBy", t_22, true);
                            if (frame.topLevel) {
                              context.setVariable("describedBy", t_22);
                            }
                            if (frame.topLevel) {
                              context.addExport("describedBy", t_22);
                            }
                            var t_23;
                            t_23 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "fieldset") ? true : false;
                            frame.set("hasFieldset", t_23, true);
                            if (frame.topLevel) {
                              context.setVariable("hasFieldset", t_23);
                            }
                            if (frame.topLevel) {
                              context.addExport("hasFieldset", t_23);
                            }
                            var macro_t_24 = runtime.makeMacro(
                              ["params", "item", "index"],
                              [],
                              function(l_params, l_item, l_index, kwargs) {
                                var callerFrame = frame;
                                frame = new runtime.Frame();
                                kwargs = kwargs || {};
                                if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
                                  frame.set("caller", kwargs.caller);
                                }
                                frame.set("params", l_params);
                                frame.set("item", l_item);
                                frame.set("index", l_index);
                                var t_25 = "";
                                var t_26;
                                t_26 = runtime.memberLookup(l_item, "id") ? runtime.memberLookup(l_item, "id") : runtime.contextOrFrameLookup(context, frame, "idPrefix") + (l_index > 1 ? "-" + l_index : "");
                                frame.set("itemId", t_26, true);
                                if (frame.topLevel) {
                                  context.setVariable("itemId", t_26);
                                }
                                if (frame.topLevel) {
                                  context.addExport("itemId", t_26);
                                }
                                t_25 += "\n  ";
                                var t_27;
                                t_27 = "conditional-" + runtime.contextOrFrameLookup(context, frame, "itemId");
                                frame.set("conditionalId", t_27, true);
                                if (frame.topLevel) {
                                  context.setVariable("conditionalId", t_27);
                                }
                                if (frame.topLevel) {
                                  context.addExport("conditionalId", t_27);
                                }
                                if (runtime.memberLookup(l_item, "divider")) {
                                  t_25 += '\n    <div class="govuk-radios__divider">';
                                  t_25 += runtime.suppressValue(runtime.memberLookup(l_item, "divider"), env.opts.autoescape);
                                  t_25 += "</div>\n  ";
                                  ;
                                } else {
                                  t_25 += "\n    ";
                                  var t_28;
                                  t_28 = env.getFilter("default").call(context, runtime.memberLookup(l_item, "checked"), runtime.memberLookup(l_params, "value") ? runtime.memberLookup(l_item, "value") == runtime.memberLookup(l_params, "value") && runtime.memberLookup(l_item, "checked") != false : false, true);
                                  frame.set("isChecked", t_28, true);
                                  if (frame.topLevel) {
                                    context.setVariable("isChecked", t_28);
                                  }
                                  if (frame.topLevel) {
                                    context.addExport("isChecked", t_28);
                                  }
                                  t_25 += "\n    ";
                                  var t_29;
                                  t_29 = runtime.memberLookup(runtime.memberLookup(l_item, "hint"), "text") || runtime.memberLookup(runtime.memberLookup(l_item, "hint"), "html") ? true : "";
                                  frame.set("hasHint", t_29, true);
                                  if (frame.topLevel) {
                                    context.setVariable("hasHint", t_29);
                                  }
                                  if (frame.topLevel) {
                                    context.addExport("hasHint", t_29);
                                  }
                                  t_25 += "\n    ";
                                  var t_30;
                                  t_30 = runtime.contextOrFrameLookup(context, frame, "itemId") + "-item-hint";
                                  frame.set("itemHintId", t_30, true);
                                  if (frame.topLevel) {
                                    context.setVariable("itemHintId", t_30);
                                  }
                                  if (frame.topLevel) {
                                    context.addExport("itemHintId", t_30);
                                  }
                                  t_25 += '\n    <div class="govuk-radios__item">\n      <input class="govuk-radios__input" id="';
                                  t_25 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "itemId"), env.opts.autoescape);
                                  t_25 += '" name="';
                                  t_25 += runtime.suppressValue(runtime.memberLookup(l_params, "name"), env.opts.autoescape);
                                  t_25 += '" type="radio" value="';
                                  t_25 += runtime.suppressValue(runtime.memberLookup(l_item, "value"), env.opts.autoescape);
                                  t_25 += '"';
                                  t_25 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "isChecked") ? " checked" : "", env.opts.autoescape);
                                  t_25 += runtime.suppressValue(runtime.memberLookup(l_item, "disabled") ? " disabled" : "", env.opts.autoescape);
                                  if (runtime.memberLookup(runtime.memberLookup(l_item, "conditional"), "html")) {
                                    t_25 += ' data-aria-controls="';
                                    t_25 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "conditionalId"), env.opts.autoescape);
                                    t_25 += '"';
                                    ;
                                  }
                                  if (runtime.contextOrFrameLookup(context, frame, "hasHint")) {
                                    t_25 += ' aria-describedby="';
                                    t_25 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "itemHintId"), env.opts.autoescape);
                                    t_25 += '"';
                                    ;
                                  }
                                  t_25 += runtime.suppressValue((lineno = 34, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [runtime.memberLookup(l_item, "attributes")])), env.opts.autoescape);
                                  t_25 += ">\n      ";
                                  t_25 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 35, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukLabel"), "govukLabel", context, [{ "html": runtime.memberLookup(l_item, "html"), "text": runtime.memberLookup(l_item, "text"), "classes": "govuk-radios__label" + (runtime.memberLookup(runtime.memberLookup(l_item, "label"), "classes") ? " " + runtime.memberLookup(runtime.memberLookup(l_item, "label"), "classes") : ""), "attributes": runtime.memberLookup(runtime.memberLookup(l_item, "label"), "attributes"), "for": runtime.contextOrFrameLookup(context, frame, "itemId") }]))), 6), env.opts.autoescape);
                                  t_25 += "\n      ";
                                  if (runtime.contextOrFrameLookup(context, frame, "hasHint")) {
                                    t_25 += "\n      ";
                                    t_25 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 43, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukHint"), "govukHint", context, [{ "id": runtime.contextOrFrameLookup(context, frame, "itemHintId"), "classes": "govuk-radios__hint" + (runtime.memberLookup(runtime.memberLookup(l_item, "hint"), "classes") ? " " + runtime.memberLookup(runtime.memberLookup(l_item, "hint"), "classes") : ""), "attributes": runtime.memberLookup(runtime.memberLookup(l_item, "hint"), "attributes"), "html": runtime.memberLookup(runtime.memberLookup(l_item, "hint"), "html"), "text": runtime.memberLookup(runtime.memberLookup(l_item, "hint"), "text") }]))), 6), env.opts.autoescape);
                                    t_25 += "\n      ";
                                    ;
                                  }
                                  t_25 += "\n    </div>\n    ";
                                  if (runtime.memberLookup(runtime.memberLookup(l_item, "conditional"), "html")) {
                                    t_25 += '\n    <div class="govuk-radios__conditional';
                                    if (!runtime.contextOrFrameLookup(context, frame, "isChecked")) {
                                      t_25 += " govuk-radios__conditional--hidden";
                                      ;
                                    }
                                    t_25 += '" id="';
                                    t_25 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "conditionalId"), env.opts.autoescape);
                                    t_25 += '">\n      ';
                                    t_25 += runtime.suppressValue(env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(l_item, "conditional"), "html"))), env.opts.autoescape);
                                    t_25 += "\n    </div>\n    ";
                                    ;
                                  }
                                  t_25 += "\n  ";
                                  ;
                                }
                                ;
                                frame = callerFrame;
                                return new runtime.SafeString(t_25);
                              }
                            );
                            context.setVariable("_radioItem", macro_t_24);
                            var t_31;
                            t_31 = function() {
                              var output2 = "";
                              output2 += "\n";
                              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint")) {
                                output2 += "\n  ";
                                var t_32;
                                t_32 = runtime.contextOrFrameLookup(context, frame, "idPrefix") + "-hint";
                                frame.set("hintId", t_32, true);
                                if (frame.topLevel) {
                                  context.setVariable("hintId", t_32);
                                }
                                if (frame.topLevel) {
                                  context.addExport("hintId", t_32);
                                }
                                output2 += "\n  ";
                                var t_33;
                                t_33 = runtime.contextOrFrameLookup(context, frame, "describedBy") ? runtime.contextOrFrameLookup(context, frame, "describedBy") + " " + runtime.contextOrFrameLookup(context, frame, "hintId") : runtime.contextOrFrameLookup(context, frame, "hintId");
                                frame.set("describedBy", t_33, true);
                                if (frame.topLevel) {
                                  context.setVariable("describedBy", t_33);
                                }
                                if (frame.topLevel) {
                                  context.addExport("describedBy", t_33);
                                }
                                output2 += "\n  ";
                                output2 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 65, colno = 14, runtime.callWrap(t_16, "govukHint", context, [{ "id": runtime.contextOrFrameLookup(context, frame, "hintId"), "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "classes"), "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "attributes"), "html": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "html"), "text": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "text") }]))), 2), env.opts.autoescape);
                                output2 += "\n";
                                ;
                              }
                              output2 += "\n";
                              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage")) {
                                output2 += "\n  ";
                                var t_34;
                                t_34 = runtime.contextOrFrameLookup(context, frame, "idPrefix") + "-error";
                                frame.set("errorId", t_34, true);
                                if (frame.topLevel) {
                                  context.setVariable("errorId", t_34);
                                }
                                if (frame.topLevel) {
                                  context.addExport("errorId", t_34);
                                }
                                output2 += "\n  ";
                                var t_35;
                                t_35 = runtime.contextOrFrameLookup(context, frame, "describedBy") ? runtime.contextOrFrameLookup(context, frame, "describedBy") + " " + runtime.contextOrFrameLookup(context, frame, "errorId") : runtime.contextOrFrameLookup(context, frame, "errorId");
                                frame.set("describedBy", t_35, true);
                                if (frame.topLevel) {
                                  context.setVariable("describedBy", t_35);
                                }
                                if (frame.topLevel) {
                                  context.addExport("describedBy", t_35);
                                }
                                output2 += "\n  ";
                                output2 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 76, colno = 22, runtime.callWrap(t_8, "govukErrorMessage", context, [{ "id": runtime.contextOrFrameLookup(context, frame, "errorId"), "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "classes"), "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "attributes"), "html": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "html"), "text": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "text"), "visuallyHiddenText": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "visuallyHiddenText") }]))), 2), env.opts.autoescape);
                                output2 += "\n";
                                ;
                              }
                              output2 += '\n  <div class="govuk-radios';
                              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
                                output2 += " ";
                                output2 += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
                                ;
                              }
                              output2 += '"';
                              output2 += runtime.suppressValue((lineno = 86, colno = 23, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
                              output2 += ' data-module="govuk-radios">\n    ';
                              if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInputs")) {
                                output2 += "\n    ";
                                output2 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInputs"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInputs"), "html"))), 4) : runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInputs"), "text"), env.opts.autoescape);
                                output2 += "\n    ";
                                ;
                              }
                              output2 += "\n    ";
                              frame = frame.push();
                              var t_38 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "items");
                              if (t_38) {
                                t_38 = runtime.fromIterator(t_38);
                                var t_37 = t_38.length;
                                for (var t_36 = 0; t_36 < t_38.length; t_36++) {
                                  var t_39 = t_38[t_36];
                                  frame.set("item", t_39);
                                  frame.set("loop.index", t_36 + 1);
                                  frame.set("loop.index0", t_36);
                                  frame.set("loop.revindex", t_37 - t_36);
                                  frame.set("loop.revindex0", t_37 - t_36 - 1);
                                  frame.set("loop.first", t_36 === 0);
                                  frame.set("loop.last", t_36 === t_37 - 1);
                                  frame.set("loop.length", t_37);
                                  output2 += "\n      ";
                                  if (t_39) {
                                    output2 += runtime.suppressValue((lineno = 92, colno = 22, runtime.callWrap(macro_t_24, "_radioItem", context, [runtime.contextOrFrameLookup(context, frame, "params"), t_39, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "loop"), "index")])), env.opts.autoescape);
                                    ;
                                  }
                                  output2 += "\n    ";
                                  ;
                                }
                              }
                              frame = frame.pop();
                              output2 += "\n    ";
                              if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInputs")) {
                                output2 += "\n    ";
                                output2 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInputs"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInputs"), "html"))), 4) : runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInputs"), "text"), env.opts.autoescape);
                                output2 += "\n    ";
                                ;
                              }
                              output2 += "\n  </div>\n";
                              ;
                              return output2;
                            }();
                            frame.set("innerHtml", t_31, true);
                            if (frame.topLevel) {
                              context.setVariable("innerHtml", t_31);
                            }
                            if (frame.topLevel) {
                              context.addExport("innerHtml", t_31);
                            }
                            output += '<div class="govuk-form-group';
                            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage")) {
                              output += " govuk-form-group--error";
                              ;
                            }
                            if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "classes")) {
                              output += " ";
                              output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "classes"), env.opts.autoescape);
                              ;
                            }
                            output += '"';
                            output += runtime.suppressValue((lineno = 102, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "attributes")])), env.opts.autoescape);
                            output += ">\n";
                            if (runtime.contextOrFrameLookup(context, frame, "hasFieldset")) {
                              output += "\n  ";
                              output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 104, colno = 18, runtime.callWrap(t_122, "govukFieldset", context, [{ "describedBy": runtime.contextOrFrameLookup(context, frame, "describedBy"), "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "fieldset"), "classes"), "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "fieldset"), "attributes"), "legend": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "fieldset"), "legend"), "html": env.getFilter("trim").call(context, runtime.contextOrFrameLookup(context, frame, "innerHtml")) }]))), 2), env.opts.autoescape);
                              output += "\n";
                              ;
                            } else {
                              output += "\n  ";
                              output += runtime.suppressValue(env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "innerHtml"))), env.opts.autoescape);
                              output += "\n";
                              ;
                            }
                            output += "\n</div>\n";
                            if (parentTemplate) {
                              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
                            } else {
                              cb(null, output);
                            }
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/select/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/select/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukSelect");
        context.setVariable("govukSelect", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/select/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/select/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += "\n";
            env.getTemplate("../error-message/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/select/template.njk", false, function(t_6, t_5) {
              if (t_6) {
                cb(t_6);
                return;
              }
              t_5.getExported(function(t_7, t_52) {
                if (t_7) {
                  cb(t_7);
                  return;
                }
                if (Object.prototype.hasOwnProperty.call(t_52, "govukErrorMessage")) {
                  var t_8 = t_52.govukErrorMessage;
                } else {
                  cb(new Error("cannot import 'govukErrorMessage'"));
                  return;
                }
                context.setVariable("govukErrorMessage", t_8);
                output += "\n";
                env.getTemplate("../hint/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/select/template.njk", false, function(t_10, t_9) {
                  if (t_10) {
                    cb(t_10);
                    return;
                  }
                  t_9.getExported(function(t_11, t_92) {
                    if (t_11) {
                      cb(t_11);
                      return;
                    }
                    if (Object.prototype.hasOwnProperty.call(t_92, "govukHint")) {
                      var t_122 = t_92.govukHint;
                    } else {
                      cb(new Error("cannot import 'govukHint'"));
                      return;
                    }
                    context.setVariable("govukHint", t_122);
                    output += "\n";
                    env.getTemplate("../label/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/select/template.njk", false, function(t_14, t_13) {
                      if (t_14) {
                        cb(t_14);
                        return;
                      }
                      t_13.getExported(function(t_15, t_132) {
                        if (t_15) {
                          cb(t_15);
                          return;
                        }
                        if (Object.prototype.hasOwnProperty.call(t_132, "govukLabel")) {
                          var t_16 = t_132.govukLabel;
                        } else {
                          cb(new Error("cannot import 'govukLabel'"));
                          return;
                        }
                        context.setVariable("govukLabel", t_16);
                        var t_17;
                        t_17 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "describedBy") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "describedBy") : "";
                        frame.set("describedBy", t_17, true);
                        if (frame.topLevel) {
                          context.setVariable("describedBy", t_17);
                        }
                        if (frame.topLevel) {
                          context.addExport("describedBy", t_17);
                        }
                        output += '\n<div class="govuk-form-group';
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage")) {
                          output += " govuk-form-group--error";
                          ;
                        }
                        if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "classes")) {
                          output += " ";
                          output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "classes"), env.opts.autoescape);
                          ;
                        }
                        output += '"';
                        output += runtime.suppressValue((lineno = 9, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "attributes")])), env.opts.autoescape);
                        output += ">\n  ";
                        output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 10, colno = 15, runtime.callWrap(t_16, "govukLabel", context, [{ "html": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "html"), "text": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "text"), "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "classes"), "isPageHeading": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "isPageHeading"), "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "attributes"), "for": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id") }]))), 2), env.opts.autoescape);
                        output += "\n";
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint")) {
                          output += "\n  ";
                          var t_18;
                          t_18 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id") + "-hint";
                          frame.set("hintId", t_18, true);
                          if (frame.topLevel) {
                            context.setVariable("hintId", t_18);
                          }
                          if (frame.topLevel) {
                            context.addExport("hintId", t_18);
                          }
                          output += "\n  ";
                          var t_19;
                          t_19 = runtime.contextOrFrameLookup(context, frame, "describedBy") ? runtime.contextOrFrameLookup(context, frame, "describedBy") + " " + runtime.contextOrFrameLookup(context, frame, "hintId") : runtime.contextOrFrameLookup(context, frame, "hintId");
                          frame.set("describedBy", t_19, true);
                          if (frame.topLevel) {
                            context.setVariable("describedBy", t_19);
                          }
                          if (frame.topLevel) {
                            context.addExport("describedBy", t_19);
                          }
                          output += "\n  ";
                          output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 21, colno = 14, runtime.callWrap(t_122, "govukHint", context, [{ "id": runtime.contextOrFrameLookup(context, frame, "hintId"), "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "classes"), "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "attributes"), "html": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "html"), "text": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "text") }]))), 2), env.opts.autoescape);
                          output += "\n";
                          ;
                        }
                        output += "\n";
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage")) {
                          output += "\n  ";
                          var t_20;
                          t_20 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id") + "-error";
                          frame.set("errorId", t_20, true);
                          if (frame.topLevel) {
                            context.setVariable("errorId", t_20);
                          }
                          if (frame.topLevel) {
                            context.addExport("errorId", t_20);
                          }
                          output += "\n  ";
                          var t_21;
                          t_21 = runtime.contextOrFrameLookup(context, frame, "describedBy") ? runtime.contextOrFrameLookup(context, frame, "describedBy") + " " + runtime.contextOrFrameLookup(context, frame, "errorId") : runtime.contextOrFrameLookup(context, frame, "errorId");
                          frame.set("describedBy", t_21, true);
                          if (frame.topLevel) {
                            context.setVariable("describedBy", t_21);
                          }
                          if (frame.topLevel) {
                            context.addExport("describedBy", t_21);
                          }
                          output += "\n  ";
                          output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 32, colno = 22, runtime.callWrap(t_8, "govukErrorMessage", context, [{ "id": runtime.contextOrFrameLookup(context, frame, "errorId"), "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "classes"), "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "attributes"), "html": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "html"), "text": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "text"), "visuallyHiddenText": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "visuallyHiddenText") }]))), 2), env.opts.autoescape);
                          output += "\n";
                          ;
                        }
                        output += "\n";
                        if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInput")) {
                          output += "\n  ";
                          output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInput"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInput"), "html"))), 2) : runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInput"), "text"), env.opts.autoescape);
                          output += "\n";
                          ;
                        }
                        output += '\n  <select class="govuk-select';
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
                          output += " ";
                          output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
                          ;
                        }
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage")) {
                          output += " govuk-select--error";
                          ;
                        }
                        output += '" id="';
                        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id"), env.opts.autoescape);
                        output += '" name="';
                        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "name"), env.opts.autoescape);
                        output += '"';
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "disabled")) {
                          output += " disabled";
                          ;
                        }
                        if (runtime.contextOrFrameLookup(context, frame, "describedBy")) {
                          output += ' aria-describedby="';
                          output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "describedBy"), env.opts.autoescape);
                          output += '"';
                          ;
                        }
                        output += runtime.suppressValue((lineno = 48, colno = 23, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
                        output += ">\n  ";
                        frame = frame.push();
                        var t_24 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "items");
                        if (t_24) {
                          t_24 = runtime.fromIterator(t_24);
                          var t_23 = t_24.length;
                          for (var t_22 = 0; t_22 < t_24.length; t_22++) {
                            var t_25 = t_24[t_22];
                            frame.set("item", t_25);
                            frame.set("loop.index", t_22 + 1);
                            frame.set("loop.index0", t_22);
                            frame.set("loop.revindex", t_23 - t_22);
                            frame.set("loop.revindex0", t_23 - t_22 - 1);
                            frame.set("loop.first", t_22 === 0);
                            frame.set("loop.last", t_22 === t_23 - 1);
                            frame.set("loop.length", t_23);
                            output += "\n    ";
                            if (t_25) {
                              var t_26;
                              t_26 = env.getFilter("default").call(context, runtime.memberLookup(t_25, "value"), runtime.memberLookup(t_25, "text"));
                              frame.set("effectiveValue", t_26, true);
                              if (frame.topLevel) {
                                context.setVariable("effectiveValue", t_26);
                              }
                              if (frame.topLevel) {
                                context.addExport("effectiveValue", t_26);
                              }
                              output += "\n    <option";
                              if (runtime.memberLookup(t_25, "value") !== runtime.contextOrFrameLookup(context, frame, "undefined")) {
                                output += ' value="';
                                output += runtime.suppressValue(runtime.memberLookup(t_25, "value"), env.opts.autoescape);
                                output += '"';
                                ;
                              }
                              output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(t_25, "selected"), runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "value") ? runtime.contextOrFrameLookup(context, frame, "effectiveValue") == runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "value") && runtime.memberLookup(t_25, "selected") != false : false, true) ? " selected" : "", env.opts.autoescape);
                              output += runtime.suppressValue(runtime.memberLookup(t_25, "disabled") ? " disabled" : "", env.opts.autoescape);
                              output += runtime.suppressValue((lineno = 56, colno = 25, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(t_25, "attributes")])), env.opts.autoescape);
                              output += ">";
                              output += runtime.suppressValue(runtime.memberLookup(t_25, "text"), env.opts.autoescape);
                              output += "</option>\n    ";
                              ;
                            }
                            output += "\n  ";
                            ;
                          }
                        }
                        frame = frame.pop();
                        output += "\n  </select>\n";
                        if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput")) {
                          output += "\n  ";
                          output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput"), "html"))), 2) : runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput"), "text"), env.opts.autoescape);
                          output += "\n";
                          ;
                        }
                        output += "\n</div>\n";
                        if (parentTemplate) {
                          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
                        } else {
                          cb(null, output);
                        }
                      });
                    });
                  });
                });
              });
            });
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/service-navigation/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/service-navigation/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukServiceNavigation");
        context.setVariable("govukServiceNavigation", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/service-navigation/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/service-navigation/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            var t_5;
            t_5 = env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "menuButtonText"), "Menu", true);
            frame.set("menuButtonText", t_5, true);
            if (frame.topLevel) {
              context.setVariable("menuButtonText", t_5);
            }
            if (frame.topLevel) {
              context.addExport("menuButtonText", t_5);
            }
            var t_6;
            t_6 = env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigationId"), "navigation", true);
            frame.set("navigationId", t_6, true);
            if (frame.topLevel) {
              context.setVariable("navigationId", t_6);
            }
            if (frame.topLevel) {
              context.addExport("navigationId", t_6);
            }
            var t_7;
            t_7 = function() {
              var output2 = "";
              output2 += '\nclass="govuk-service-navigation';
              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
                output2 += " ";
                output2 += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
                ;
              }
              output2 += '"\ndata-module="govuk-service-navigation"';
              output2 += runtime.suppressValue((lineno = 8, colno = 19, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
              output2 += "\n";
              ;
              return output2;
            }();
            frame.set("commonAttributes", t_7, true);
            if (frame.topLevel) {
              context.setVariable("commonAttributes", t_7);
            }
            if (frame.topLevel) {
              context.addExport("commonAttributes", t_7);
            }
            var t_8;
            t_8 = function() {
              var output2 = "";
              output2 += '\n  <div class="govuk-width-container">\n\n    ';
              if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "slots"), "start")) {
                output2 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "slots"), "start")), env.opts.autoescape);
                ;
              }
              output2 += '<div class="govuk-service-navigation__container">\n      ';
              output2 += "\n      ";
              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "serviceName")) {
                output2 += '\n        <span class="govuk-service-navigation__service-name">\n          ';
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "serviceUrl")) {
                  output2 += '\n            <a href="';
                  output2 += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "serviceUrl"), env.opts.autoescape);
                  output2 += '" class="govuk-service-navigation__link">\n              ';
                  output2 += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "serviceName"), env.opts.autoescape);
                  output2 += "\n            </a>\n          ";
                  ;
                } else {
                  output2 += '\n            <span class="govuk-service-navigation__text">';
                  output2 += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "serviceName"), env.opts.autoescape);
                  output2 += "</span>\n          ";
                  ;
                }
                output2 += "\n        </span>\n      ";
                ;
              }
              output2 += "\n\n      ";
              output2 += "\n      ";
              if (env.getFilter("length").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigation")) || runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "slots"), "navigationStart") || runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "slots"), "navigationEnd")) {
                output2 += '\n        <nav aria-label="';
                output2 += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigationLabel"), runtime.contextOrFrameLookup(context, frame, "menuButtonText"), true), env.opts.autoescape);
                output2 += '" class="govuk-service-navigation__wrapper';
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigationClasses")) {
                  output2 += " ";
                  output2 += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigationClasses"), env.opts.autoescape);
                  ;
                }
                output2 += '">\n          <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="';
                output2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "navigationId"), env.opts.autoescape);
                output2 += '"';
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "menuButtonLabel") && runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "menuButtonLabel") != runtime.contextOrFrameLookup(context, frame, "menuButtonText")) {
                  output2 += ' aria-label="';
                  output2 += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "menuButtonLabel"), env.opts.autoescape);
                  output2 += '"';
                  ;
                }
                output2 += " hidden>\n            ";
                output2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "menuButtonText"), env.opts.autoescape);
                output2 += '\n          </button>\n\n          <ul class="govuk-service-navigation__list" id="';
                output2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "navigationId"), env.opts.autoescape);
                output2 += '" >\n\n            ';
                if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "slots"), "navigationStart")) {
                  output2 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "slots"), "navigationStart")), env.opts.autoescape);
                  ;
                }
                frame = frame.push();
                var t_11 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigation");
                if (t_11) {
                  t_11 = runtime.fromIterator(t_11);
                  var t_10 = t_11.length;
                  for (var t_9 = 0; t_9 < t_11.length; t_9++) {
                    var t_122 = t_11[t_9];
                    frame.set("item", t_122);
                    frame.set("loop.index", t_9 + 1);
                    frame.set("loop.index0", t_9);
                    frame.set("loop.revindex", t_10 - t_9);
                    frame.set("loop.revindex0", t_10 - t_9 - 1);
                    frame.set("loop.first", t_9 === 0);
                    frame.set("loop.last", t_9 === t_10 - 1);
                    frame.set("loop.length", t_10);
                    output2 += "\n              ";
                    var t_13;
                    t_13 = function() {
                      var output3 = "";
                      output3 += "\n                ";
                      output3 += "\n                ";
                      if (runtime.memberLookup(t_122, "active") || runtime.memberLookup(t_122, "current")) {
                        output3 += '\n                  <strong class="govuk-service-navigation__active-fallback">';
                        output3 += runtime.suppressValue(runtime.memberLookup(t_122, "html") ? env.getFilter("safe").call(context, runtime.memberLookup(t_122, "html")) : runtime.memberLookup(t_122, "text"), env.opts.autoescape);
                        output3 += "</strong>\n                ";
                        ;
                      } else {
                        output3 += runtime.suppressValue(runtime.memberLookup(t_122, "html") ? env.getFilter("safe").call(context, runtime.memberLookup(t_122, "html")) : runtime.memberLookup(t_122, "text"), env.opts.autoescape);
                        ;
                      }
                      output3 += "\n              ";
                      ;
                      return output3;
                    }();
                    frame.set("linkInnerContent", t_13, true);
                    if (frame.topLevel) {
                      context.setVariable("linkInnerContent", t_13);
                    }
                    if (frame.topLevel) {
                      context.addExport("linkInnerContent", t_13);
                    }
                    output2 += "\n\n              ";
                    output2 += '\n              <li class="govuk-service-navigation__item';
                    if (runtime.memberLookup(t_122, "active") || runtime.memberLookup(t_122, "current")) {
                      output2 += " govuk-service-navigation__item--active";
                      ;
                    }
                    output2 += '">\n                ';
                    if (runtime.memberLookup(t_122, "href")) {
                      output2 += '\n                  <a class="govuk-service-navigation__link" href="';
                      output2 += runtime.suppressValue(runtime.memberLookup(t_122, "href"), env.opts.autoescape);
                      output2 += '"';
                      if (runtime.memberLookup(t_122, "active") || runtime.memberLookup(t_122, "current")) {
                        output2 += ' aria-current="';
                        output2 += runtime.suppressValue(runtime.memberLookup(t_122, "current") ? "page" : "true", env.opts.autoescape);
                        output2 += '"';
                        ;
                      }
                      output2 += runtime.suppressValue((lineno = 65, colno = 39, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(t_122, "attributes")])), env.opts.autoescape);
                      output2 += ">\n                    ";
                      output2 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "linkInnerContent")), env.opts.autoescape);
                      output2 += "\n                  </a>\n                ";
                      ;
                    } else {
                      if (runtime.memberLookup(t_122, "html") || runtime.memberLookup(t_122, "text")) {
                        output2 += '\n                  <span class="govuk-service-navigation__text"';
                        if (runtime.memberLookup(t_122, "active") || runtime.memberLookup(t_122, "current")) {
                          output2 += ' aria-current="';
                          output2 += runtime.suppressValue(runtime.memberLookup(t_122, "current") ? "page" : "true", env.opts.autoescape);
                          output2 += '"';
                          ;
                        }
                        output2 += ">\n                    ";
                        output2 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "linkInnerContent")), env.opts.autoescape);
                        output2 += "\n                  </span>\n                ";
                        ;
                      }
                      ;
                    }
                    output2 += "\n              </li>\n            ";
                    ;
                  }
                }
                frame = frame.pop();
                output2 += "\n\n            ";
                if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "slots"), "navigationEnd")) {
                  output2 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "slots"), "navigationEnd")), env.opts.autoescape);
                  ;
                }
                output2 += "</ul>\n        </nav>\n      ";
                ;
              }
              output2 += "\n    </div>\n\n    ";
              if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "slots"), "end")) {
                output2 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "slots"), "end")), env.opts.autoescape);
                ;
              }
              output2 += "</div>\n";
              ;
              return output2;
            }();
            frame.set("innerContent", t_8, true);
            if (frame.topLevel) {
              context.setVariable("innerContent", t_8);
            }
            if (frame.topLevel) {
              context.addExport("innerContent", t_8);
            }
            output += "\n";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "serviceName") || runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "slots"), "start") || runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "slots"), "end")) {
              output += '\n  <section aria-label="';
              output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "ariaLabel"), "Service information"), env.opts.autoescape);
              output += '" ';
              output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "commonAttributes")), env.opts.autoescape);
              output += ">\n    ";
              output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "innerContent")), env.opts.autoescape);
              output += "\n  </section>\n";
              ;
            } else {
              output += "\n  <div ";
              output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "commonAttributes")), env.opts.autoescape);
              output += ">\n    ";
              output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "innerContent")), env.opts.autoescape);
              output += "\n  </div>\n";
              ;
            }
            output += "\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/skip-link/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/skip-link/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukSkipLink");
        context.setVariable("govukSkipLink", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/skip-link/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/skip-link/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += '<a href="';
            output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "href"), "#content", true), env.opts.autoescape);
            output += '" class="govuk-skip-link';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
              output += " ";
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
              ;
            }
            output += '"';
            output += runtime.suppressValue((lineno = 3, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
            output += ' data-module="govuk-skip-link">';
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html") ? env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html")) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text"), env.opts.autoescape);
            output += "</a>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/summary-list/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/summary-list/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukSummaryList");
        context.setVariable("govukSummaryList", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/summary-list/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/summary-list/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            var macro_t_5 = runtime.makeMacro(
              ["action", "cardTitle"],
              [],
              function(l_action, l_cardTitle, kwargs) {
                var callerFrame = frame;
                frame = new runtime.Frame();
                kwargs = kwargs || {};
                if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
                  frame.set("caller", kwargs.caller);
                }
                frame.set("action", l_action);
                frame.set("cardTitle", l_cardTitle);
                var t_6 = "";
                t_6 += '\n  <a class="govuk-link';
                if (runtime.memberLookup(l_action, "classes")) {
                  t_6 += " ";
                  t_6 += runtime.suppressValue(runtime.memberLookup(l_action, "classes"), env.opts.autoescape);
                  ;
                }
                t_6 += '" href="';
                t_6 += runtime.suppressValue(runtime.memberLookup(l_action, "href"), env.opts.autoescape);
                t_6 += '"';
                t_6 += runtime.suppressValue((lineno = 4, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [runtime.memberLookup(l_action, "attributes")])), env.opts.autoescape);
                t_6 += ">";
                t_6 += runtime.suppressValue(runtime.memberLookup(l_action, "html") ? env.getFilter("indent").call(context, env.getFilter("safe").call(context, runtime.memberLookup(l_action, "html")), 4) : runtime.memberLookup(l_action, "text"), env.opts.autoescape);
                if (runtime.memberLookup(l_action, "visuallyHiddenText") || l_cardTitle) {
                  t_6 += '<span class="govuk-visually-hidden">';
                  if (runtime.memberLookup(l_action, "visuallyHiddenText")) {
                    t_6 += " ";
                    t_6 += runtime.suppressValue(runtime.memberLookup(l_action, "visuallyHiddenText"), env.opts.autoescape);
                    ;
                  }
                  if (l_cardTitle) {
                    t_6 += " (";
                    t_6 += runtime.suppressValue(runtime.memberLookup(l_cardTitle, "html") ? env.getFilter("safe").call(context, env.getFilter("indent").call(context, runtime.memberLookup(l_cardTitle, "html"), 6)) : runtime.memberLookup(l_cardTitle, "text"), env.opts.autoescape);
                    t_6 += ")";
                    ;
                  }
                  t_6 += "</span>";
                  ;
                }
                t_6 += "</a>\n";
                ;
                frame = callerFrame;
                return new runtime.SafeString(t_6);
              }
            );
            context.setVariable("_actionLink", macro_t_5);
            var macro_t_7 = runtime.makeMacro(
              ["params"],
              [],
              function(l_params, kwargs) {
                var callerFrame = frame;
                frame = new runtime.Frame();
                kwargs = kwargs || {};
                if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
                  frame.set("caller", kwargs.caller);
                }
                frame.set("params", l_params);
                var t_8 = "";
                var t_9;
                t_9 = runtime.memberLookup(runtime.memberLookup(l_params, "title"), "headingLevel") ? runtime.memberLookup(runtime.memberLookup(l_params, "title"), "headingLevel") : 2;
                frame.set("headingLevel", t_9, true);
                if (frame.topLevel) {
                  context.setVariable("headingLevel", t_9);
                }
                if (frame.topLevel) {
                  context.addExport("headingLevel", t_9);
                }
                t_8 += '<div class="govuk-summary-card';
                if (runtime.memberLookup(l_params, "classes")) {
                  t_8 += " ";
                  t_8 += runtime.suppressValue(runtime.memberLookup(l_params, "classes"), env.opts.autoescape);
                  ;
                }
                t_8 += '"';
                t_8 += runtime.suppressValue((lineno = 19, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [runtime.memberLookup(l_params, "attributes")])), env.opts.autoescape);
                t_8 += '>\n  <div class="govuk-summary-card__title-wrapper">\n  ';
                if (runtime.memberLookup(l_params, "title")) {
                  t_8 += "\n    <h";
                  t_8 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "headingLevel"), env.opts.autoescape);
                  t_8 += ' class="govuk-summary-card__title';
                  if (runtime.memberLookup(runtime.memberLookup(l_params, "title"), "classes")) {
                    t_8 += " ";
                    t_8 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(l_params, "title"), "classes"), env.opts.autoescape);
                    ;
                  }
                  t_8 += '">\n      ';
                  t_8 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(l_params, "title"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(l_params, "title"), "html"))), 6) : runtime.memberLookup(runtime.memberLookup(l_params, "title"), "text"), env.opts.autoescape);
                  t_8 += "\n    </h";
                  t_8 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "headingLevel"), env.opts.autoescape);
                  t_8 += ">\n  ";
                  ;
                }
                t_8 += "\n  ";
                if (runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(l_params, "actions"), "items"), "length")) {
                  t_8 += "\n    ";
                  if (runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(l_params, "actions"), "items"), "length") == 1) {
                    t_8 += '\n    <div class="govuk-summary-card__actions';
                    if (runtime.memberLookup(runtime.memberLookup(l_params, "actions"), "classes")) {
                      t_8 += " ";
                      t_8 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(l_params, "actions"), "classes"), env.opts.autoescape);
                      ;
                    }
                    t_8 += '">\n      ';
                    t_8 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 29, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_actionLink"), "_actionLink", context, [runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(l_params, "actions"), "items"), 0), runtime.memberLookup(l_params, "title")]))), 4), env.opts.autoescape);
                    t_8 += "\n    </div>\n    ";
                    ;
                  } else {
                    t_8 += '\n    <ul class="govuk-summary-card__actions';
                    if (runtime.memberLookup(runtime.memberLookup(l_params, "actions"), "classes")) {
                      t_8 += " ";
                      t_8 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(l_params, "actions"), "classes"), env.opts.autoescape);
                      ;
                    }
                    t_8 += '">\n      ';
                    frame = frame.push();
                    var t_122 = runtime.memberLookup(runtime.memberLookup(l_params, "actions"), "items");
                    if (t_122) {
                      t_122 = runtime.fromIterator(t_122);
                      var t_11 = t_122.length;
                      for (var t_10 = 0; t_10 < t_122.length; t_10++) {
                        var t_13 = t_122[t_10];
                        frame.set("action", t_13);
                        frame.set("loop.index", t_10 + 1);
                        frame.set("loop.index0", t_10);
                        frame.set("loop.revindex", t_11 - t_10);
                        frame.set("loop.revindex0", t_11 - t_10 - 1);
                        frame.set("loop.first", t_10 === 0);
                        frame.set("loop.last", t_10 === t_11 - 1);
                        frame.set("loop.length", t_11);
                        t_8 += '\n      <li class="govuk-summary-card__action">\n        ';
                        t_8 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 35, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_actionLink"), "_actionLink", context, [t_13, runtime.memberLookup(l_params, "title")]))), 8), env.opts.autoescape);
                        t_8 += "\n      </li>\n      ";
                        ;
                      }
                    }
                    frame = frame.pop();
                    t_8 += "\n    </ul>\n    ";
                    ;
                  }
                  t_8 += "\n  ";
                  ;
                }
                t_8 += '\n  </div>\n\n  <div class="govuk-summary-card__content">\n    ';
                t_8 += runtime.suppressValue(env.getFilter("trim").call(context, (lineno = 44, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, []))), env.opts.autoescape);
                t_8 += "\n  </div>\n</div>\n";
                ;
                frame = callerFrame;
                return new runtime.SafeString(t_8);
              }
            );
            context.setVariable("_summaryCard", macro_t_7);
            var t_14;
            t_14 = false;
            frame.set("anyRowHasActions", t_14, true);
            if (frame.topLevel) {
              context.setVariable("anyRowHasActions", t_14);
            }
            if (frame.topLevel) {
              context.addExport("anyRowHasActions", t_14);
            }
            output += "\n";
            frame = frame.push();
            var t_17 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "rows");
            if (t_17) {
              t_17 = runtime.fromIterator(t_17);
              var t_16 = t_17.length;
              for (var t_15 = 0; t_15 < t_17.length; t_15++) {
                var t_18 = t_17[t_15];
                frame.set("row", t_18);
                frame.set("loop.index", t_15 + 1);
                frame.set("loop.index0", t_15);
                frame.set("loop.revindex", t_16 - t_15);
                frame.set("loop.revindex0", t_16 - t_15 - 1);
                frame.set("loop.first", t_15 === 0);
                frame.set("loop.last", t_15 === t_16 - 1);
                frame.set("loop.length", t_16);
                output += "\n  ";
                var t_19;
                t_19 = env.getFilter("length").call(context, runtime.memberLookup(runtime.memberLookup(t_18, "actions"), "items")) ? true : runtime.contextOrFrameLookup(context, frame, "anyRowHasActions");
                frame.set("anyRowHasActions", t_19, true);
                if (frame.topLevel) {
                  context.setVariable("anyRowHasActions", t_19);
                }
                if (frame.topLevel) {
                  context.addExport("anyRowHasActions", t_19);
                }
                output += "\n";
                ;
              }
            }
            frame = frame.pop();
            var t_20;
            t_20 = function() {
              var output2 = "";
              output2 += '\n<dl class="govuk-summary-list';
              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
                output2 += " ";
                output2 += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
                ;
              }
              output2 += '"';
              output2 += runtime.suppressValue((lineno = 56, colno = 107, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
              output2 += ">\n";
              frame = frame.push();
              var t_23 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "rows");
              if (t_23) {
                t_23 = runtime.fromIterator(t_23);
                var t_22 = t_23.length;
                for (var t_21 = 0; t_21 < t_23.length; t_21++) {
                  var t_24 = t_23[t_21];
                  frame.set("row", t_24);
                  frame.set("loop.index", t_21 + 1);
                  frame.set("loop.index0", t_21);
                  frame.set("loop.revindex", t_22 - t_21);
                  frame.set("loop.revindex0", t_22 - t_21 - 1);
                  frame.set("loop.first", t_21 === 0);
                  frame.set("loop.last", t_21 === t_22 - 1);
                  frame.set("loop.length", t_22);
                  output2 += "\n  ";
                  if (t_24) {
                    output2 += '\n  <div class="govuk-summary-list__row';
                    if (runtime.contextOrFrameLookup(context, frame, "anyRowHasActions") && !runtime.memberLookup(runtime.memberLookup(t_24, "actions"), "items")) {
                      output2 += " govuk-summary-list__row--no-actions";
                      ;
                    }
                    if (runtime.memberLookup(t_24, "classes")) {
                      output2 += " ";
                      output2 += runtime.suppressValue(runtime.memberLookup(t_24, "classes"), env.opts.autoescape);
                      ;
                    }
                    output2 += '">\n    <dt class="govuk-summary-list__key';
                    if (runtime.memberLookup(runtime.memberLookup(t_24, "key"), "classes")) {
                      output2 += " ";
                      output2 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(t_24, "key"), "classes"), env.opts.autoescape);
                      ;
                    }
                    output2 += '">\n      ';
                    output2 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(t_24, "key"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(t_24, "key"), "html"))), 6) : runtime.memberLookup(runtime.memberLookup(t_24, "key"), "text"), env.opts.autoescape);
                    output2 += '\n    </dt>\n    <dd class="govuk-summary-list__value';
                    if (runtime.memberLookup(runtime.memberLookup(t_24, "value"), "classes")) {
                      output2 += " ";
                      output2 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(t_24, "value"), "classes"), env.opts.autoescape);
                      ;
                    }
                    output2 += '">\n      ';
                    output2 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(t_24, "value"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(t_24, "value"), "html"))), 6) : runtime.memberLookup(runtime.memberLookup(t_24, "value"), "text"), env.opts.autoescape);
                    output2 += "\n    </dd>\n    ";
                    if (runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(t_24, "actions"), "items"), "length")) {
                      output2 += '\n    <dd class="govuk-summary-list__actions';
                      if (runtime.memberLookup(runtime.memberLookup(t_24, "actions"), "classes")) {
                        output2 += " ";
                        output2 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(t_24, "actions"), "classes"), env.opts.autoescape);
                        ;
                      }
                      output2 += '">\n      ';
                      if (runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(t_24, "actions"), "items"), "length") == 1) {
                        output2 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 69, colno = 23, runtime.callWrap(macro_t_5, "_actionLink", context, [runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(t_24, "actions"), "items"), 0), runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "card"), "title")]))), 6, true), env.opts.autoescape);
                        output2 += "\n      ";
                        ;
                      } else {
                        output2 += '\n      <ul class="govuk-summary-list__actions-list">\n        ';
                        frame = frame.push();
                        var t_27 = runtime.memberLookup(runtime.memberLookup(t_24, "actions"), "items");
                        if (t_27) {
                          t_27 = runtime.fromIterator(t_27);
                          var t_26 = t_27.length;
                          for (var t_25 = 0; t_25 < t_27.length; t_25++) {
                            var t_28 = t_27[t_25];
                            frame.set("action", t_28);
                            frame.set("loop.index", t_25 + 1);
                            frame.set("loop.index0", t_25);
                            frame.set("loop.revindex", t_26 - t_25);
                            frame.set("loop.revindex0", t_26 - t_25 - 1);
                            frame.set("loop.first", t_25 === 0);
                            frame.set("loop.last", t_25 === t_26 - 1);
                            frame.set("loop.length", t_26);
                            output2 += '\n        <li class="govuk-summary-list__actions-list-item">\n          ';
                            output2 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 74, colno = 24, runtime.callWrap(macro_t_5, "_actionLink", context, [t_28, runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "card"), "title")]))), 8), env.opts.autoescape);
                            output2 += "\n        </li>\n        ";
                            ;
                          }
                        }
                        frame = frame.pop();
                        output2 += "\n      </ul>\n      ";
                        ;
                      }
                      output2 += "\n    </dd>\n    ";
                      ;
                    }
                    output2 += "\n  </div>\n  ";
                    ;
                  }
                  output2 += "\n";
                  ;
                }
              }
              frame = frame.pop();
              output2 += "\n</dl>";
              ;
              return output2;
            }();
            frame.set("summaryList", t_20, true);
            if (frame.topLevel) {
              context.setVariable("summaryList", t_20);
            }
            if (frame.topLevel) {
              context.addExport("summaryList", t_20);
            }
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "card")) {
              output += runtime.suppressValue((lineno = 88, colno = 22, runtime.callWrap(macro_t_7, "_summaryCard", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "card"), runtime.makeKeywordArgs({ "caller": function() {
                var macro_t_29 = runtime.makeMacro(
                  [],
                  [],
                  function(kwargs) {
                    var callerFrame = frame;
                    frame = frame.push(true);
                    kwargs = kwargs || {};
                    if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
                      frame.set("caller", kwargs.caller);
                    }
                    var t_30 = "";
                    t_30 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "summaryList"))), 4), env.opts.autoescape);
                    ;
                    frame = frame.pop();
                    return new runtime.SafeString(t_30);
                  }
                );
                return macro_t_29;
              }() })])), env.opts.autoescape);
              ;
            } else {
              output += runtime.suppressValue(env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "summaryList"))), env.opts.autoescape);
              ;
            }
            output += "\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/table/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/table/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukTable");
        context.setVariable("govukTable", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/table/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/table/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += '<table class="govuk-table';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
              output += " ";
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
              ;
            }
            output += '"';
            output += runtime.suppressValue((lineno = 4, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
            output += ">\n";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "caption")) {
              output += '\n  <caption class="govuk-table__caption';
              if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "captionClasses")) {
                output += " ";
                output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "captionClasses"), env.opts.autoescape);
                ;
              }
              output += '">';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "caption"), env.opts.autoescape);
              output += "</caption>\n";
              ;
            }
            output += "\n";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "head")) {
              output += '\n  <thead class="govuk-table__head">\n    <tr class="govuk-table__row">\n    ';
              frame = frame.push();
              var t_7 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "head");
              if (t_7) {
                t_7 = runtime.fromIterator(t_7);
                var t_6 = t_7.length;
                for (var t_5 = 0; t_5 < t_7.length; t_5++) {
                  var t_8 = t_7[t_5];
                  frame.set("item", t_8);
                  frame.set("loop.index", t_5 + 1);
                  frame.set("loop.index0", t_5);
                  frame.set("loop.revindex", t_6 - t_5);
                  frame.set("loop.revindex0", t_6 - t_5 - 1);
                  frame.set("loop.first", t_5 === 0);
                  frame.set("loop.last", t_5 === t_6 - 1);
                  frame.set("loop.length", t_6);
                  output += '\n      <th scope="col" class="govuk-table__header';
                  if (runtime.memberLookup(t_8, "format")) {
                    output += " govuk-table__header--";
                    output += runtime.suppressValue(runtime.memberLookup(t_8, "format"), env.opts.autoescape);
                    ;
                  }
                  if (runtime.memberLookup(t_8, "classes")) {
                    output += " ";
                    output += runtime.suppressValue(runtime.memberLookup(t_8, "classes"), env.opts.autoescape);
                    ;
                  }
                  output += '"';
                  if (runtime.memberLookup(t_8, "colspan")) {
                    output += ' colspan="';
                    output += runtime.suppressValue(runtime.memberLookup(t_8, "colspan"), env.opts.autoescape);
                    output += '"';
                    ;
                  }
                  if (runtime.memberLookup(t_8, "rowspan")) {
                    output += ' rowspan="';
                    output += runtime.suppressValue(runtime.memberLookup(t_8, "rowspan"), env.opts.autoescape);
                    output += '"';
                    ;
                  }
                  output += runtime.suppressValue((lineno = 20, colno = 27, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(t_8, "attributes")])), env.opts.autoescape);
                  output += ">";
                  output += runtime.suppressValue(runtime.memberLookup(t_8, "html") ? env.getFilter("safe").call(context, runtime.memberLookup(t_8, "html")) : runtime.memberLookup(t_8, "text"), env.opts.autoescape);
                  output += "</th>\n    ";
                  ;
                }
              }
              frame = frame.pop();
              output += "\n    </tr>\n  </thead>\n";
              ;
            }
            output += '\n  <tbody class="govuk-table__body">\n';
            frame = frame.push();
            var t_11 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "rows");
            if (t_11) {
              t_11 = runtime.fromIterator(t_11);
              var t_10 = t_11.length;
              for (var t_9 = 0; t_9 < t_11.length; t_9++) {
                var t_122 = t_11[t_9];
                frame.set("row", t_122);
                frame.set("loop.index", t_9 + 1);
                frame.set("loop.index0", t_9);
                frame.set("loop.revindex", t_10 - t_9);
                frame.set("loop.revindex0", t_10 - t_9 - 1);
                frame.set("loop.first", t_9 === 0);
                frame.set("loop.last", t_9 === t_10 - 1);
                frame.set("loop.length", t_10);
                output += "\n  ";
                if (t_122) {
                  output += '\n    <tr class="govuk-table__row">\n    ';
                  frame = frame.push();
                  var t_15 = t_122;
                  if (t_15) {
                    t_15 = runtime.fromIterator(t_15);
                    var t_14 = t_15.length;
                    for (var t_13 = 0; t_13 < t_15.length; t_13++) {
                      var t_16 = t_15[t_13];
                      frame.set("cell", t_16);
                      frame.set("loop.index", t_13 + 1);
                      frame.set("loop.index0", t_13);
                      frame.set("loop.revindex", t_14 - t_13);
                      frame.set("loop.revindex0", t_14 - t_13 - 1);
                      frame.set("loop.first", t_13 === 0);
                      frame.set("loop.last", t_13 === t_14 - 1);
                      frame.set("loop.length", t_14);
                      output += "\n      ";
                      var t_17;
                      t_17 = function() {
                        var output2 = "";
                        if (runtime.memberLookup(t_16, "colspan")) {
                          output2 += ' colspan="';
                          output2 += runtime.suppressValue(runtime.memberLookup(t_16, "colspan"), env.opts.autoescape);
                          output2 += '"';
                          ;
                        }
                        if (runtime.memberLookup(t_16, "rowspan")) {
                          output2 += ' rowspan="';
                          output2 += runtime.suppressValue(runtime.memberLookup(t_16, "rowspan"), env.opts.autoescape);
                          output2 += '"';
                          ;
                        }
                        output2 += runtime.suppressValue((lineno = 35, colno = 27, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(t_16, "attributes")])), env.opts.autoescape);
                        ;
                        return output2;
                      }();
                      frame.set("commonAttributes", t_17, true);
                      if (frame.topLevel) {
                        context.setVariable("commonAttributes", t_17);
                      }
                      if (frame.topLevel) {
                        context.addExport("commonAttributes", t_17);
                      }
                      output += "\n      ";
                      if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "loop"), "first") && runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "firstCellIsHeader")) {
                        output += '\n      <th scope="row" class="govuk-table__header';
                        if (runtime.memberLookup(t_16, "classes")) {
                          output += " ";
                          output += runtime.suppressValue(runtime.memberLookup(t_16, "classes"), env.opts.autoescape);
                          ;
                        }
                        output += '"';
                        output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "commonAttributes")), env.opts.autoescape);
                        output += ">";
                        output += runtime.suppressValue(runtime.memberLookup(t_16, "html") ? env.getFilter("safe").call(context, runtime.memberLookup(t_16, "html")) : runtime.memberLookup(t_16, "text"), env.opts.autoescape);
                        output += "</th>\n      ";
                        ;
                      } else {
                        output += '\n      <td class="govuk-table__cell';
                        if (runtime.memberLookup(t_16, "format")) {
                          output += " govuk-table__cell--";
                          output += runtime.suppressValue(runtime.memberLookup(t_16, "format"), env.opts.autoescape);
                          ;
                        }
                        if (runtime.memberLookup(t_16, "classes")) {
                          output += " ";
                          output += runtime.suppressValue(runtime.memberLookup(t_16, "classes"), env.opts.autoescape);
                          ;
                        }
                        output += '"';
                        output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "commonAttributes")), env.opts.autoescape);
                        output += ">";
                        output += runtime.suppressValue(runtime.memberLookup(t_16, "html") ? env.getFilter("safe").call(context, runtime.memberLookup(t_16, "html")) : runtime.memberLookup(t_16, "text"), env.opts.autoescape);
                        output += "</td>\n      ";
                        ;
                      }
                      output += "\n    ";
                      ;
                    }
                  }
                  frame = frame.pop();
                  output += "\n    </tr>\n  ";
                  ;
                }
                output += "\n";
                ;
              }
            }
            frame = frame.pop();
            output += "\n  </tbody>\n</table>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/tabs/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/tabs/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukTabs");
        context.setVariable("govukTabs", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/tabs/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/tabs/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            var macro_t_5 = runtime.makeMacro(
              ["params", "item", "index"],
              [],
              function(l_params, l_item, l_index, kwargs) {
                var callerFrame = frame;
                frame = new runtime.Frame();
                kwargs = kwargs || {};
                if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
                  frame.set("caller", kwargs.caller);
                }
                frame.set("params", l_params);
                frame.set("item", l_item);
                frame.set("index", l_index);
                var t_6 = "";
                t_6 += "\n";
                var t_7;
                t_7 = runtime.memberLookup(l_item, "id") ? runtime.memberLookup(l_item, "id") : runtime.contextOrFrameLookup(context, frame, "idPrefix") + "-" + l_index;
                frame.set("tabPanelId", t_7, true);
                if (frame.topLevel) {
                  context.setVariable("tabPanelId", t_7);
                }
                if (frame.topLevel) {
                  context.addExport("tabPanelId", t_7);
                }
                t_6 += '<li class="govuk-tabs__list-item';
                if (l_index == 1) {
                  t_6 += " govuk-tabs__list-item--selected";
                  ;
                }
                t_6 += '">\n  <a class="govuk-tabs__tab" href="#';
                t_6 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tabPanelId"), env.opts.autoescape);
                t_6 += '"';
                t_6 += runtime.suppressValue((lineno = 6, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [runtime.memberLookup(l_item, "attributes")])), env.opts.autoescape);
                t_6 += ">\n    ";
                t_6 += runtime.suppressValue(runtime.memberLookup(l_item, "label"), env.opts.autoescape);
                t_6 += "\n  </a>\n</li>\n";
                ;
                frame = callerFrame;
                return new runtime.SafeString(t_6);
              }
            );
            context.setVariable("_tabListItem", macro_t_5);
            var macro_t_8 = runtime.makeMacro(
              ["params", "item", "index"],
              [],
              function(l_params, l_item, l_index, kwargs) {
                var callerFrame = frame;
                frame = new runtime.Frame();
                kwargs = kwargs || {};
                if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
                  frame.set("caller", kwargs.caller);
                }
                frame.set("params", l_params);
                frame.set("item", l_item);
                frame.set("index", l_index);
                var t_9 = "";
                t_9 += "\n";
                var t_10;
                t_10 = runtime.memberLookup(l_item, "id") ? runtime.memberLookup(l_item, "id") : runtime.contextOrFrameLookup(context, frame, "idPrefix") + "-" + l_index;
                frame.set("tabPanelId", t_10, true);
                if (frame.topLevel) {
                  context.setVariable("tabPanelId", t_10);
                }
                if (frame.topLevel) {
                  context.addExport("tabPanelId", t_10);
                }
                t_9 += '<div class="govuk-tabs__panel';
                if (l_index > 1) {
                  t_9 += " govuk-tabs__panel--hidden";
                  ;
                }
                t_9 += '" id="';
                t_9 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tabPanelId"), env.opts.autoescape);
                t_9 += '"';
                t_9 += runtime.suppressValue((lineno = 15, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukAttributes"), "govukAttributes", context, [runtime.memberLookup(runtime.memberLookup(l_item, "panel"), "attributes")])), env.opts.autoescape);
                t_9 += ">\n";
                if (runtime.memberLookup(runtime.memberLookup(l_item, "panel"), "html")) {
                  t_9 += "\n  ";
                  t_9 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(l_item, "panel"), "html"))), 2), env.opts.autoescape);
                  t_9 += "\n";
                  ;
                } else {
                  if (runtime.memberLookup(runtime.memberLookup(l_item, "panel"), "text")) {
                    t_9 += '\n  <p class="govuk-body">';
                    t_9 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(l_item, "panel"), "text"), env.opts.autoescape);
                    t_9 += "</p>\n";
                    ;
                  }
                  ;
                }
                t_9 += "\n</div>\n";
                ;
                frame = callerFrame;
                return new runtime.SafeString(t_9);
              }
            );
            context.setVariable("_tabPanel", macro_t_8);
            var t_11;
            t_11 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "idPrefix") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "idPrefix") : "";
            frame.set("idPrefix", t_11, true);
            if (frame.topLevel) {
              context.setVariable("idPrefix", t_11);
            }
            if (frame.topLevel) {
              context.addExport("idPrefix", t_11);
            }
            output += "<div";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id")) {
              output += ' id="';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id"), env.opts.autoescape);
              output += '"';
              ;
            }
            output += ' class="govuk-tabs';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
              output += " ";
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
              ;
            }
            output += '"';
            output += runtime.suppressValue((lineno = 29, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
            output += ' data-module="govuk-tabs">\n  <h2 class="govuk-tabs__title">\n    ';
            output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "title"), "Contents"), env.opts.autoescape);
            output += "\n  </h2>\n";
            if (env.getFilter("length").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "items"))) {
              output += '\n  <ul class="govuk-tabs__list">\n    ';
              frame = frame.push();
              var t_14 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "items");
              if (t_14) {
                t_14 = runtime.fromIterator(t_14);
                var t_13 = t_14.length;
                for (var t_122 = 0; t_122 < t_14.length; t_122++) {
                  var t_15 = t_14[t_122];
                  frame.set("item", t_15);
                  frame.set("loop.index", t_122 + 1);
                  frame.set("loop.index0", t_122);
                  frame.set("loop.revindex", t_13 - t_122);
                  frame.set("loop.revindex0", t_13 - t_122 - 1);
                  frame.set("loop.first", t_122 === 0);
                  frame.set("loop.last", t_122 === t_13 - 1);
                  frame.set("loop.length", t_13);
                  output += "\n      ";
                  if (t_15) {
                    output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 37, colno = 24, runtime.callWrap(macro_t_5, "_tabListItem", context, [runtime.contextOrFrameLookup(context, frame, "params"), t_15, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "loop"), "index")]))), 4, true), env.opts.autoescape);
                    output += "\n      ";
                    ;
                  }
                  output += "\n    ";
                  ;
                }
              }
              frame = frame.pop();
              output += "\n  </ul>\n  ";
              frame = frame.push();
              var t_18 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "items");
              if (t_18) {
                t_18 = runtime.fromIterator(t_18);
                var t_17 = t_18.length;
                for (var t_16 = 0; t_16 < t_18.length; t_16++) {
                  var t_19 = t_18[t_16];
                  frame.set("item", t_19);
                  frame.set("loop.index", t_16 + 1);
                  frame.set("loop.index0", t_16);
                  frame.set("loop.revindex", t_17 - t_16);
                  frame.set("loop.revindex0", t_17 - t_16 - 1);
                  frame.set("loop.first", t_16 === 0);
                  frame.set("loop.last", t_16 === t_17 - 1);
                  frame.set("loop.length", t_17);
                  output += "\n    ";
                  if (t_19) {
                    output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 43, colno = 19, runtime.callWrap(macro_t_8, "_tabPanel", context, [runtime.contextOrFrameLookup(context, frame, "params"), t_19, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "loop"), "index")]))), 2, true), env.opts.autoescape);
                    output += "\n    ";
                    ;
                  }
                  output += "\n  ";
                  ;
                }
              }
              frame = frame.pop();
              output += "\n";
              ;
            }
            output += "\n</div>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/tag/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/tag/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukTag");
        context.setVariable("govukTag", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/tag/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/tag/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += '<strong class="govuk-tag';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
              output += " ";
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
              ;
            }
            output += '"';
            output += runtime.suppressValue((lineno = 3, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
            output += ">\n  ";
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html"))), 2) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text"), env.opts.autoescape);
            output += "\n</strong>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/task-list/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/task-list/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukTaskList");
        context.setVariable("govukTaskList", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/task-list/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/task-list/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += "\n";
            env.getTemplate("../tag/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/task-list/template.njk", false, function(t_6, t_5) {
              if (t_6) {
                cb(t_6);
                return;
              }
              t_5.getExported(function(t_7, t_52) {
                if (t_7) {
                  cb(t_7);
                  return;
                }
                if (Object.prototype.hasOwnProperty.call(t_52, "govukTag")) {
                  var t_8 = t_52.govukTag;
                } else {
                  cb(new Error("cannot import 'govukTag'"));
                  return;
                }
                context.setVariable("govukTag", t_8);
                var t_9;
                t_9 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "idPrefix") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "idPrefix") : "task-list";
                frame.set("idPrefix", t_9, true);
                if (frame.topLevel) {
                  context.setVariable("idPrefix", t_9);
                }
                if (frame.topLevel) {
                  context.addExport("idPrefix", t_9);
                }
                var macro_t_10 = runtime.makeMacro(
                  ["params", "item", "index"],
                  [],
                  function(l_params, l_item, l_index, kwargs) {
                    var callerFrame = frame;
                    frame = new runtime.Frame();
                    kwargs = kwargs || {};
                    if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
                      frame.set("caller", kwargs.caller);
                    }
                    frame.set("params", l_params);
                    frame.set("item", l_item);
                    frame.set("index", l_index);
                    var t_11 = "";
                    var t_122;
                    t_122 = runtime.contextOrFrameLookup(context, frame, "idPrefix") + "-" + l_index + "-hint";
                    frame.set("hintId", t_122, true);
                    if (frame.topLevel) {
                      context.setVariable("hintId", t_122);
                    }
                    if (frame.topLevel) {
                      context.addExport("hintId", t_122);
                    }
                    var t_13;
                    t_13 = runtime.contextOrFrameLookup(context, frame, "idPrefix") + "-" + l_index + "-status";
                    frame.set("statusId", t_13, true);
                    if (frame.topLevel) {
                      context.setVariable("statusId", t_13);
                    }
                    if (frame.topLevel) {
                      context.addExport("statusId", t_13);
                    }
                    t_11 += '\n  <li class="govuk-task-list__item';
                    if (runtime.memberLookup(l_item, "href")) {
                      t_11 += " govuk-task-list__item--with-link";
                      ;
                    }
                    if (runtime.memberLookup(l_item, "classes")) {
                      t_11 += " ";
                      t_11 += runtime.suppressValue(runtime.memberLookup(l_item, "classes"), env.opts.autoescape);
                      ;
                    }
                    t_11 += '">\n    <div class="govuk-task-list__name-and-hint">\n    ';
                    if (runtime.memberLookup(l_item, "href")) {
                      t_11 += '\n      <a class="govuk-link govuk-task-list__link';
                      if (runtime.memberLookup(runtime.memberLookup(l_item, "title"), "classes")) {
                        t_11 += " ";
                        t_11 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(l_item, "title"), "classes"), env.opts.autoescape);
                        ;
                      }
                      t_11 += '" href="';
                      t_11 += runtime.suppressValue(runtime.memberLookup(l_item, "href"), env.opts.autoescape);
                      t_11 += '" aria-describedby="';
                      t_11 += runtime.suppressValue(runtime.memberLookup(l_item, "hint") ? runtime.contextOrFrameLookup(context, frame, "hintId") + " " : "", env.opts.autoescape);
                      t_11 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "statusId"), env.opts.autoescape);
                      t_11 += '">\n        ';
                      t_11 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(l_item, "title"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(l_item, "title"), "html"))), 8) : runtime.memberLookup(runtime.memberLookup(l_item, "title"), "text"), env.opts.autoescape);
                      t_11 += "\n      </a>\n    ";
                      ;
                    } else {
                      t_11 += "\n      <div";
                      if (runtime.memberLookup(runtime.memberLookup(l_item, "title"), "classes")) {
                        t_11 += ' class="';
                        t_11 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(l_item, "title"), "classes"), env.opts.autoescape);
                        t_11 += '"';
                        ;
                      }
                      t_11 += ">\n        ";
                      t_11 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(l_item, "title"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(l_item, "title"), "html"))), 8) : runtime.memberLookup(runtime.memberLookup(l_item, "title"), "text"), env.opts.autoescape);
                      t_11 += "\n      </div>\n    ";
                      ;
                    }
                    t_11 += "\n    ";
                    if (runtime.memberLookup(l_item, "hint")) {
                      t_11 += '\n      <div id="';
                      t_11 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "hintId"), env.opts.autoescape);
                      t_11 += '" class="govuk-task-list__hint">\n        ';
                      t_11 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(l_item, "hint"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(l_item, "hint"), "html"))), 8) : runtime.memberLookup(runtime.memberLookup(l_item, "hint"), "text"), env.opts.autoescape);
                      t_11 += "\n      </div>\n    ";
                      ;
                    }
                    t_11 += '\n    </div>\n    <div class="govuk-task-list__status';
                    if (runtime.memberLookup(runtime.memberLookup(l_item, "status"), "classes")) {
                      t_11 += " ";
                      t_11 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(l_item, "status"), "classes"), env.opts.autoescape);
                      ;
                    }
                    t_11 += '" id="';
                    t_11 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "statusId"), env.opts.autoescape);
                    t_11 += '">\n    ';
                    if (runtime.memberLookup(runtime.memberLookup(l_item, "status"), "tag")) {
                      t_11 += "\n      ";
                      t_11 += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 27, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukTag"), "govukTag", context, [runtime.memberLookup(runtime.memberLookup(l_item, "status"), "tag")]))), 6), env.opts.autoescape);
                      t_11 += "\n    ";
                      ;
                    } else {
                      t_11 += "\n      ";
                      t_11 += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(l_item, "status"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(l_item, "status"), "html"))), 6) : runtime.memberLookup(runtime.memberLookup(l_item, "status"), "text"), env.opts.autoescape);
                      t_11 += "\n    ";
                      ;
                    }
                    t_11 += "\n    </div>\n  </li>";
                    ;
                    frame = callerFrame;
                    return new runtime.SafeString(t_11);
                  }
                );
                context.setVariable("_taskListItem", macro_t_10);
                output += '\n\n<ul class="govuk-task-list';
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
                  output += " ";
                  output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
                  ;
                }
                output += '"';
                output += runtime.suppressValue((lineno = 36, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
                output += ">\n  ";
                frame = frame.push();
                var t_16 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "items");
                if (t_16) {
                  t_16 = runtime.fromIterator(t_16);
                  var t_15 = t_16.length;
                  for (var t_14 = 0; t_14 < t_16.length; t_14++) {
                    var t_17 = t_16[t_14];
                    frame.set("item", t_17);
                    frame.set("loop.index", t_14 + 1);
                    frame.set("loop.index0", t_14);
                    frame.set("loop.revindex", t_15 - t_14);
                    frame.set("loop.revindex0", t_15 - t_14 - 1);
                    frame.set("loop.first", t_14 === 0);
                    frame.set("loop.last", t_14 === t_15 - 1);
                    frame.set("loop.length", t_15);
                    output += runtime.suppressValue(t_17 ? (lineno = 38, colno = 21, runtime.callWrap(macro_t_10, "_taskListItem", context, [runtime.contextOrFrameLookup(context, frame, "params"), t_17, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "loop"), "index")])) : "", env.opts.autoescape);
                    output += "\n  ";
                    ;
                  }
                }
                frame = frame.pop();
                output += "\n</ul>\n";
                if (parentTemplate) {
                  parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
                } else {
                  cb(null, output);
                }
              });
            });
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/textarea/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/textarea/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukTextarea");
        context.setVariable("govukTextarea", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/textarea/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/textarea/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += "\n";
            env.getTemplate("../error-message/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/textarea/template.njk", false, function(t_6, t_5) {
              if (t_6) {
                cb(t_6);
                return;
              }
              t_5.getExported(function(t_7, t_52) {
                if (t_7) {
                  cb(t_7);
                  return;
                }
                if (Object.prototype.hasOwnProperty.call(t_52, "govukErrorMessage")) {
                  var t_8 = t_52.govukErrorMessage;
                } else {
                  cb(new Error("cannot import 'govukErrorMessage'"));
                  return;
                }
                context.setVariable("govukErrorMessage", t_8);
                output += "\n";
                env.getTemplate("../hint/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/textarea/template.njk", false, function(t_10, t_9) {
                  if (t_10) {
                    cb(t_10);
                    return;
                  }
                  t_9.getExported(function(t_11, t_92) {
                    if (t_11) {
                      cb(t_11);
                      return;
                    }
                    if (Object.prototype.hasOwnProperty.call(t_92, "govukHint")) {
                      var t_122 = t_92.govukHint;
                    } else {
                      cb(new Error("cannot import 'govukHint'"));
                      return;
                    }
                    context.setVariable("govukHint", t_122);
                    output += "\n";
                    env.getTemplate("../label/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/components/textarea/template.njk", false, function(t_14, t_13) {
                      if (t_14) {
                        cb(t_14);
                        return;
                      }
                      t_13.getExported(function(t_15, t_132) {
                        if (t_15) {
                          cb(t_15);
                          return;
                        }
                        if (Object.prototype.hasOwnProperty.call(t_132, "govukLabel")) {
                          var t_16 = t_132.govukLabel;
                        } else {
                          cb(new Error("cannot import 'govukLabel'"));
                          return;
                        }
                        context.setVariable("govukLabel", t_16);
                        var t_17;
                        t_17 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "describedBy") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "describedBy") : "";
                        frame.set("describedBy", t_17, true);
                        if (frame.topLevel) {
                          context.setVariable("describedBy", t_17);
                        }
                        if (frame.topLevel) {
                          context.addExport("describedBy", t_17);
                        }
                        output += '\n<div class="govuk-form-group';
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage")) {
                          output += " govuk-form-group--error";
                          ;
                        }
                        if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "classes")) {
                          output += " ";
                          output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "classes"), env.opts.autoescape);
                          ;
                        }
                        output += '"';
                        output += runtime.suppressValue((lineno = 9, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "attributes")])), env.opts.autoescape);
                        output += ">\n  ";
                        output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 10, colno = 15, runtime.callWrap(t_16, "govukLabel", context, [{ "html": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "html"), "text": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "text"), "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "classes"), "isPageHeading": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "isPageHeading"), "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "label"), "attributes"), "for": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id") }]))), 2), env.opts.autoescape);
                        output += "\n";
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint")) {
                          output += "\n  ";
                          var t_18;
                          t_18 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id") + "-hint";
                          frame.set("hintId", t_18, true);
                          if (frame.topLevel) {
                            context.setVariable("hintId", t_18);
                          }
                          if (frame.topLevel) {
                            context.addExport("hintId", t_18);
                          }
                          output += "\n  ";
                          var t_19;
                          t_19 = runtime.contextOrFrameLookup(context, frame, "describedBy") ? runtime.contextOrFrameLookup(context, frame, "describedBy") + " " + runtime.contextOrFrameLookup(context, frame, "hintId") : runtime.contextOrFrameLookup(context, frame, "hintId");
                          frame.set("describedBy", t_19, true);
                          if (frame.topLevel) {
                            context.setVariable("describedBy", t_19);
                          }
                          if (frame.topLevel) {
                            context.addExport("describedBy", t_19);
                          }
                          output += "\n  ";
                          output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 21, colno = 14, runtime.callWrap(t_122, "govukHint", context, [{ "id": runtime.contextOrFrameLookup(context, frame, "hintId"), "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "classes"), "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "attributes"), "html": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "html"), "text": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "hint"), "text") }]))), 2), env.opts.autoescape);
                          output += "\n";
                          ;
                        }
                        output += "\n";
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage")) {
                          output += "\n  ";
                          var t_20;
                          t_20 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id") + "-error";
                          frame.set("errorId", t_20, true);
                          if (frame.topLevel) {
                            context.setVariable("errorId", t_20);
                          }
                          if (frame.topLevel) {
                            context.addExport("errorId", t_20);
                          }
                          output += "\n  ";
                          var t_21;
                          t_21 = runtime.contextOrFrameLookup(context, frame, "describedBy") ? runtime.contextOrFrameLookup(context, frame, "describedBy") + " " + runtime.contextOrFrameLookup(context, frame, "errorId") : runtime.contextOrFrameLookup(context, frame, "errorId");
                          frame.set("describedBy", t_21, true);
                          if (frame.topLevel) {
                            context.setVariable("describedBy", t_21);
                          }
                          if (frame.topLevel) {
                            context.addExport("describedBy", t_21);
                          }
                          output += "\n  ";
                          output += runtime.suppressValue(env.getFilter("indent").call(context, env.getFilter("trim").call(context, (lineno = 32, colno = 22, runtime.callWrap(t_8, "govukErrorMessage", context, [{ "id": runtime.contextOrFrameLookup(context, frame, "errorId"), "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "classes"), "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "attributes"), "html": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "html"), "text": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "text"), "visuallyHiddenText": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage"), "visuallyHiddenText") }]))), 2), env.opts.autoescape);
                          output += "\n";
                          ;
                        }
                        output += "\n";
                        if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInput")) {
                          output += "\n  ";
                          output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInput"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInput"), "html"))), 2) : runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "beforeInput"), "text"), env.opts.autoescape);
                          output += "\n";
                          ;
                        }
                        output += '\n  <textarea class="govuk-textarea';
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "errorMessage")) {
                          output += " govuk-textarea--error";
                          ;
                        }
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
                          output += " ";
                          output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
                          ;
                        }
                        output += '" id="';
                        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id"), env.opts.autoescape);
                        output += '" name="';
                        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "name"), env.opts.autoescape);
                        output += '" rows="';
                        output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "rows"), 5, true), env.opts.autoescape);
                        output += '"';
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "spellcheck") === false || runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "spellcheck") === true) {
                          output += ' spellcheck="';
                          output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "spellcheck"), env.opts.autoescape);
                          output += '"';
                          ;
                        }
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "disabled")) {
                          output += " disabled";
                          ;
                        }
                        if (runtime.contextOrFrameLookup(context, frame, "describedBy")) {
                          output += ' aria-describedby="';
                          output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "describedBy"), env.opts.autoescape);
                          output += '"';
                          ;
                        }
                        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "autocomplete")) {
                          output += ' autocomplete="';
                          output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "autocomplete"), env.opts.autoescape);
                          output += '"';
                          ;
                        }
                        output += runtime.suppressValue((lineno = 49, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
                        output += ">";
                        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "value"), env.opts.autoescape);
                        output += "</textarea>\n";
                        if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput")) {
                          output += "\n  ";
                          output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput"), "html") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput"), "html"))), 2) : runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "formGroup"), "afterInput"), "text"), env.opts.autoescape);
                          output += "\n";
                          ;
                        }
                        output += "\n</div>\n";
                        if (parentTemplate) {
                          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
                        } else {
                          cb(null, output);
                        }
                      });
                    });
                  });
                });
              });
            });
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/warning-text/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "node_modules/govuk-frontend/dist/govuk/components/warning-text/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukWarningText");
        context.setVariable("govukWarningText", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/components/warning-text/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/components/warning-text/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            output += '<div class="govuk-warning-text';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
              output += " ";
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
              ;
            }
            output += '"';
            output += runtime.suppressValue((lineno = 3, colno = 21, runtime.callWrap(t_4, "govukAttributes", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes")])), env.opts.autoescape);
            output += '>\n  <span class="govuk-warning-text__icon" aria-hidden="true">!</span>\n  <strong class="govuk-warning-text__text">\n    <span class="govuk-visually-hidden">';
            output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "iconFallbackText"), "Warning", true), env.opts.autoescape);
            output += "</span>\n    ";
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html") ? env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html")) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text"), env.opts.autoescape);
            output += "\n  </strong>\n</div>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/macros/attributes.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        output += "\n";
        var macro_t_1 = runtime.makeMacro(
          ["attributes"],
          [],
          function(l_attributes, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("attributes", l_attributes);
            var t_2 = "";
            var t_3;
            t_3 = env.getTest("string").call(context, l_attributes) === true ? l_attributes : "";
            frame.set("attributesHtml", t_3, true);
            if (frame.topLevel) {
              context.setVariable("attributesHtml", t_3);
            }
            if (frame.topLevel) {
              context.addExport("attributesHtml", t_3);
            }
            if (env.getTest("mapping").call(context, l_attributes) === true) {
              t_2 += "\n    ";
              frame = frame.push();
              var t_6 = l_attributes;
              if (t_6) {
                t_6 = runtime.fromIterator(t_6);
                var t_4;
                if (runtime.isArray(t_6)) {
                  var t_5 = t_6.length;
                  for (t_4 = 0; t_4 < t_6.length; t_4++) {
                    var t_7 = t_6[t_4][0];
                    frame.set("[object Object]", t_6[t_4][0]);
                    var t_8 = t_6[t_4][1];
                    frame.set("[object Object]", t_6[t_4][1]);
                    frame.set("loop.index", t_4 + 1);
                    frame.set("loop.index0", t_4);
                    frame.set("loop.revindex", t_5 - t_4);
                    frame.set("loop.revindex0", t_5 - t_4 - 1);
                    frame.set("loop.first", t_4 === 0);
                    frame.set("loop.last", t_4 === t_5 - 1);
                    frame.set("loop.length", t_5);
                    if (env.getTest("mapping").call(context, t_8) === true && !(lineno = 72, colno = 63, runtime.callWrap(runtime.memberLookup([runtime.contextOrFrameLookup(context, frame, "undefined"), null], "includes"), '--expression--["includes"]', context, [runtime.memberLookup(t_8, "val")])) && runtime.memberLookup(t_8, "length")) {
                      t_2 += "\n        ";
                      t_8 = runtime.memberLookup(t_8, "val");
                      frame.set("value", t_8, true);
                      if (frame.topLevel) {
                        context.setVariable("value", t_8);
                      }
                      if (frame.topLevel) {
                        context.addExport("value", t_8);
                      }
                      t_2 += "\n      ";
                      ;
                    }
                    var t_9;
                    t_9 = env.getTest("mapping").call(context, t_8) === true ? t_8 : { "value": t_8, "optional": false };
                    frame.set("options", t_9, true);
                    if (frame.topLevel) {
                      context.setVariable("options", t_9);
                    }
                    if (frame.topLevel) {
                      context.addExport("options", t_9);
                    }
                    if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "options"), "optional") === true && runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "options"), "value") === true) {
                      t_2 += "\n        ";
                      var t_10;
                      t_10 = runtime.contextOrFrameLookup(context, frame, "attributesHtml") + " " + env.getFilter("escape").call(context, t_7);
                      frame.set("attributesHtml", t_10, true);
                      if (frame.topLevel) {
                        context.setVariable("attributesHtml", t_10);
                      }
                      if (frame.topLevel) {
                        context.addExport("attributesHtml", t_10);
                      }
                      ;
                    } else {
                      if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "options"), "optional") === true && !(lineno = 86, colno = 82, runtime.callWrap(runtime.memberLookup([runtime.contextOrFrameLookup(context, frame, "undefined"), null, false], "includes"), '--expression--["includes"]', context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "options"), "value")])) || runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "options"), "optional") !== true) {
                        t_2 += "\n        ";
                        var t_11;
                        t_11 = runtime.contextOrFrameLookup(context, frame, "attributesHtml") + " " + env.getFilter("escape").call(context, t_7) + '="' + env.getFilter("escape").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "options"), "value")) + '"';
                        frame.set("attributesHtml", t_11, true);
                        if (frame.topLevel) {
                          context.setVariable("attributesHtml", t_11);
                        }
                        if (frame.topLevel) {
                          context.addExport("attributesHtml", t_11);
                        }
                        t_2 += "\n      ";
                        ;
                      }
                      ;
                    }
                    t_2 += "\n    ";
                    ;
                  }
                } else {
                  t_4 = -1;
                  var t_5 = runtime.keys(t_6).length;
                  for (var t_12 in t_6) {
                    t_4++;
                    var t_13 = t_6[t_12];
                    frame.set("name", t_12);
                    frame.set("value", t_13);
                    frame.set("loop.index", t_4 + 1);
                    frame.set("loop.index0", t_4);
                    frame.set("loop.revindex", t_5 - t_4);
                    frame.set("loop.revindex0", t_5 - t_4 - 1);
                    frame.set("loop.first", t_4 === 0);
                    frame.set("loop.last", t_4 === t_5 - 1);
                    frame.set("loop.length", t_5);
                    if (env.getTest("mapping").call(context, t_13) === true && !(lineno = 72, colno = 63, runtime.callWrap(runtime.memberLookup([runtime.contextOrFrameLookup(context, frame, "undefined"), null], "includes"), '--expression--["includes"]', context, [runtime.memberLookup(t_13, "val")])) && runtime.memberLookup(t_13, "length")) {
                      t_2 += "\n        ";
                      t_13 = runtime.memberLookup(t_13, "val");
                      frame.set("value", t_13, true);
                      if (frame.topLevel) {
                        context.setVariable("value", t_13);
                      }
                      if (frame.topLevel) {
                        context.addExport("value", t_13);
                      }
                      t_2 += "\n      ";
                      ;
                    }
                    var t_14;
                    t_14 = env.getTest("mapping").call(context, t_13) === true ? t_13 : { "value": t_13, "optional": false };
                    frame.set("options", t_14, true);
                    if (frame.topLevel) {
                      context.setVariable("options", t_14);
                    }
                    if (frame.topLevel) {
                      context.addExport("options", t_14);
                    }
                    if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "options"), "optional") === true && runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "options"), "value") === true) {
                      t_2 += "\n        ";
                      var t_15;
                      t_15 = runtime.contextOrFrameLookup(context, frame, "attributesHtml") + " " + env.getFilter("escape").call(context, t_12);
                      frame.set("attributesHtml", t_15, true);
                      if (frame.topLevel) {
                        context.setVariable("attributesHtml", t_15);
                      }
                      if (frame.topLevel) {
                        context.addExport("attributesHtml", t_15);
                      }
                      ;
                    } else {
                      if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "options"), "optional") === true && !(lineno = 86, colno = 82, runtime.callWrap(runtime.memberLookup([runtime.contextOrFrameLookup(context, frame, "undefined"), null, false], "includes"), '--expression--["includes"]', context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "options"), "value")])) || runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "options"), "optional") !== true) {
                        t_2 += "\n        ";
                        var t_16;
                        t_16 = runtime.contextOrFrameLookup(context, frame, "attributesHtml") + " " + env.getFilter("escape").call(context, t_12) + '="' + env.getFilter("escape").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "options"), "value")) + '"';
                        frame.set("attributesHtml", t_16, true);
                        if (frame.topLevel) {
                          context.setVariable("attributesHtml", t_16);
                        }
                        if (frame.topLevel) {
                          context.addExport("attributesHtml", t_16);
                        }
                        t_2 += "\n      ";
                        ;
                      }
                      ;
                    }
                    t_2 += "\n    ";
                    ;
                  }
                }
              }
              frame = frame.pop();
              t_2 += "\n  ";
              ;
            }
            t_2 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "attributesHtml")), env.opts.autoescape);
            ;
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukAttributes");
        context.setVariable("govukAttributes", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/macros/i18n.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        output += "\n";
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            if (runtime.memberLookup(l_params, "messages")) {
              frame = frame.push();
              var t_5 = runtime.memberLookup(l_params, "messages");
              if (t_5) {
                t_5 = runtime.fromIterator(t_5);
                var t_3;
                if (runtime.isArray(t_5)) {
                  var t_4 = t_5.length;
                  for (t_3 = 0; t_3 < t_5.length; t_3++) {
                    var t_6 = t_5[t_3][0];
                    frame.set("[object Object]", t_5[t_3][0]);
                    var t_7 = t_5[t_3][1];
                    frame.set("[object Object]", t_5[t_3][1]);
                    frame.set("loop.index", t_3 + 1);
                    frame.set("loop.index0", t_3);
                    frame.set("loop.revindex", t_4 - t_3);
                    frame.set("loop.revindex0", t_4 - t_3 - 1);
                    frame.set("loop.first", t_3 === 0);
                    frame.set("loop.last", t_3 === t_4 - 1);
                    frame.set("loop.length", t_4);
                    t_2 += " data-i18n.";
                    t_2 += runtime.suppressValue(runtime.memberLookup(l_params, "key"), env.opts.autoescape);
                    t_2 += ".";
                    t_2 += runtime.suppressValue(t_6, env.opts.autoescape);
                    t_2 += '="';
                    t_2 += runtime.suppressValue(env.getFilter("escape").call(context, t_7), env.opts.autoescape);
                    t_2 += '"';
                    ;
                  }
                } else {
                  t_3 = -1;
                  var t_4 = runtime.keys(t_5).length;
                  for (var t_8 in t_5) {
                    t_3++;
                    var t_9 = t_5[t_8];
                    frame.set("pluralRule", t_8);
                    frame.set("message", t_9);
                    frame.set("loop.index", t_3 + 1);
                    frame.set("loop.index0", t_3);
                    frame.set("loop.revindex", t_4 - t_3);
                    frame.set("loop.revindex0", t_4 - t_3 - 1);
                    frame.set("loop.first", t_3 === 0);
                    frame.set("loop.last", t_3 === t_4 - 1);
                    frame.set("loop.length", t_4);
                    t_2 += " data-i18n.";
                    t_2 += runtime.suppressValue(runtime.memberLookup(l_params, "key"), env.opts.autoescape);
                    t_2 += ".";
                    t_2 += runtime.suppressValue(t_8, env.opts.autoescape);
                    t_2 += '="';
                    t_2 += runtime.suppressValue(env.getFilter("escape").call(context, t_9), env.opts.autoescape);
                    t_2 += '"';
                    ;
                  }
                }
              }
              frame = frame.pop();
              t_2 += "\n  ";
              ;
            } else {
              if (runtime.memberLookup(l_params, "message")) {
                t_2 += " data-i18n.";
                t_2 += runtime.suppressValue(runtime.memberLookup(l_params, "key"), env.opts.autoescape);
                t_2 += '="';
                t_2 += runtime.suppressValue(env.getFilter("escape").call(context, runtime.memberLookup(l_params, "message")), env.opts.autoescape);
                t_2 += '"';
                ;
              }
              ;
            }
            ;
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("govukI18nAttributes");
        context.setVariable("govukI18nAttributes", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["node_modules/govuk-frontend/dist/govuk/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("./macros/attributes.njk", false, "node_modules/govuk-frontend/dist/govuk/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukAttributes")) {
              var t_4 = t_12.govukAttributes;
            } else {
              cb(new Error("cannot import 'govukAttributes'"));
              return;
            }
            context.setVariable("govukAttributes", t_4);
            env.getTemplate("./components/skip-link/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/template.njk", false, function(t_6, t_5) {
              if (t_6) {
                cb(t_6);
                return;
              }
              t_5.getExported(function(t_7, t_52) {
                if (t_7) {
                  cb(t_7);
                  return;
                }
                if (Object.prototype.hasOwnProperty.call(t_52, "govukSkipLink")) {
                  var t_8 = t_52.govukSkipLink;
                } else {
                  cb(new Error("cannot import 'govukSkipLink'"));
                  return;
                }
                context.setVariable("govukSkipLink", t_8);
                env.getTemplate("./components/header/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/template.njk", false, function(t_10, t_9) {
                  if (t_10) {
                    cb(t_10);
                    return;
                  }
                  t_9.getExported(function(t_11, t_92) {
                    if (t_11) {
                      cb(t_11);
                      return;
                    }
                    if (Object.prototype.hasOwnProperty.call(t_92, "govukHeader")) {
                      var t_122 = t_92.govukHeader;
                    } else {
                      cb(new Error("cannot import 'govukHeader'"));
                      return;
                    }
                    context.setVariable("govukHeader", t_122);
                    env.getTemplate("./components/footer/macro.njk", false, "node_modules/govuk-frontend/dist/govuk/template.njk", false, function(t_14, t_13) {
                      if (t_14) {
                        cb(t_14);
                        return;
                      }
                      t_13.getExported(function(t_15, t_132) {
                        if (t_15) {
                          cb(t_15);
                          return;
                        }
                        if (Object.prototype.hasOwnProperty.call(t_132, "govukFooter")) {
                          var t_16 = t_132.govukFooter;
                        } else {
                          cb(new Error("cannot import 'govukFooter'"));
                          return;
                        }
                        context.setVariable("govukFooter", t_16);
                        output += '<!DOCTYPE html>\n<html lang="';
                        output += runtime.suppressValue(env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "htmlLang"), "en", true), env.opts.autoescape);
                        output += '" class="govuk-template';
                        if (runtime.contextOrFrameLookup(context, frame, "htmlClasses")) {
                          output += " ";
                          output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "htmlClasses"), env.opts.autoescape);
                          ;
                        }
                        output += '">\n  <head>\n    <meta charset="utf-8">\n    <title';
                        if (runtime.contextOrFrameLookup(context, frame, "pageTitleLang")) {
                          output += ' lang="';
                          output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageTitleLang"), env.opts.autoescape);
                          output += '"';
                          ;
                        }
                        output += ">";
                        (parentTemplate ? function(e, c, f, r, cb2) {
                          cb2("");
                        } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_18, t_17) {
                          if (t_18) {
                            cb(t_18);
                            return;
                          }
                          output += t_17;
                          output += '</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n    <meta name="theme-color" content="';
                          output += runtime.suppressValue(env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "themeColor"), "#0b0c0c", true), env.opts.autoescape);
                          output += '">';
                          output += "\n\n    ";
                          (parentTemplate ? function(e, c, f, r, cb2) {
                            cb2("");
                          } : context.getBlock("headIcons"))(env, context, frame, runtime, function(t_20, t_19) {
                            if (t_20) {
                              cb(t_20);
                              return;
                            }
                            output += t_19;
                            output += "\n\n    ";
                            (parentTemplate ? function(e, c, f, r, cb2) {
                              cb2("");
                            } : context.getBlock("head"))(env, context, frame, runtime, function(t_22, t_21) {
                              if (t_22) {
                                cb(t_22);
                                return;
                              }
                              output += t_21;
                              output += "\n    ";
                              if (runtime.contextOrFrameLookup(context, frame, "opengraphImageUrl") || runtime.contextOrFrameLookup(context, frame, "assetUrl")) {
                                output += '\n    <meta property="og:image" content="';
                                output += runtime.suppressValue(env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "opengraphImageUrl"), runtime.contextOrFrameLookup(context, frame, "assetUrl") + "/images/govuk-opengraph-image.png", true), env.opts.autoescape);
                                output += '">\n    ';
                                ;
                              }
                              output += '\n  </head>\n  <body class="govuk-template__body';
                              if (runtime.contextOrFrameLookup(context, frame, "bodyClasses")) {
                                output += " ";
                                output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "bodyClasses"), env.opts.autoescape);
                                ;
                              }
                              output += '"';
                              output += runtime.suppressValue((lineno = 27, colno = 107, runtime.callWrap(t_4, "govukAttributes", context, [runtime.contextOrFrameLookup(context, frame, "bodyAttributes")])), env.opts.autoescape);
                              output += ">\n    <script";
                              if (runtime.contextOrFrameLookup(context, frame, "cspNonce")) {
                                output += ' nonce="';
                                output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "cspNonce"), env.opts.autoescape);
                                output += '"';
                                ;
                              }
                              output += ">document.body.className += ' js-enabled' + ('noModule' in HTMLScriptElement.prototype ? ' govuk-frontend-supported' : '');<\/script>\n    ";
                              (parentTemplate ? function(e, c, f, r, cb2) {
                                cb2("");
                              } : context.getBlock("bodyStart"))(env, context, frame, runtime, function(t_24, t_23) {
                                if (t_24) {
                                  cb(t_24);
                                  return;
                                }
                                output += t_23;
                                output += "\n\n    ";
                                (parentTemplate ? function(e, c, f, r, cb2) {
                                  cb2("");
                                } : context.getBlock("skipLink"))(env, context, frame, runtime, function(t_26, t_25) {
                                  if (t_26) {
                                    cb(t_26);
                                    return;
                                  }
                                  output += t_25;
                                  output += "\n\n    ";
                                  (parentTemplate ? function(e, c, f, r, cb2) {
                                    cb2("");
                                  } : context.getBlock("header"))(env, context, frame, runtime, function(t_28, t_27) {
                                    if (t_28) {
                                      cb(t_28);
                                      return;
                                    }
                                    output += t_27;
                                    output += "\n\n    ";
                                    (parentTemplate ? function(e, c, f, r, cb2) {
                                      cb2("");
                                    } : context.getBlock("main"))(env, context, frame, runtime, function(t_30, t_29) {
                                      if (t_30) {
                                        cb(t_30);
                                        return;
                                      }
                                      output += t_29;
                                      output += "\n\n    ";
                                      (parentTemplate ? function(e, c, f, r, cb2) {
                                        cb2("");
                                      } : context.getBlock("footer"))(env, context, frame, runtime, function(t_32, t_31) {
                                        if (t_32) {
                                          cb(t_32);
                                          return;
                                        }
                                        output += t_31;
                                        output += "\n\n    ";
                                        (parentTemplate ? function(e, c, f, r, cb2) {
                                          cb2("");
                                        } : context.getBlock("bodyEnd"))(env, context, frame, runtime, function(t_34, t_33) {
                                          if (t_34) {
                                            cb(t_34);
                                            return;
                                          }
                                          output += t_33;
                                          output += "\n  </body>\n</html>\n";
                                          if (parentTemplate) {
                                            parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
                                          } else {
                                            cb(null, output);
                                          }
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_pageTitle(env, context, frame, runtime, cb) {
      var lineno = 8;
      var colno = 76;
      var output = "";
      try {
        var frame = frame.push(true);
        output += "GOV.UK - The best place to find government services and information";
        cb(null, output);
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_headIcons(env, context, frame, runtime, cb) {
      var lineno = 12;
      var colno = 7;
      var output = "";
      try {
        var frame = frame.push(true);
        output += '\n      <link rel="icon" sizes="48x48" href="';
        output += runtime.suppressValue(env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "assetPath"), "/assets", true), env.opts.autoescape);
        output += '/images/favicon.ico">\n      <link rel="icon" sizes="any" href="';
        output += runtime.suppressValue(env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "assetPath"), "/assets", true), env.opts.autoescape);
        output += '/images/favicon.svg" type="image/svg+xml">\n      <link rel="mask-icon" href="';
        output += runtime.suppressValue(env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "assetPath"), "/assets", true), env.opts.autoescape);
        output += '/images/govuk-icon-mask.svg" color="';
        output += runtime.suppressValue(env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "themeColor"), "#0b0c0c"), env.opts.autoescape);
        output += '">';
        output += '\n      <link rel="apple-touch-icon" href="';
        output += runtime.suppressValue(env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "assetPath"), "/assets", true), env.opts.autoescape);
        output += '/images/govuk-icon-180.png">\n      <link rel="manifest" href="';
        output += runtime.suppressValue(env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "assetPath"), "/assets", true), env.opts.autoescape);
        output += '/manifest.json">\n    ';
        cb(null, output);
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_head(env, context, frame, runtime, cb) {
      var lineno = 20;
      var colno = 7;
      var output = "";
      try {
        var frame = frame.push(true);
        cb(null, output);
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_bodyStart(env, context, frame, runtime, cb) {
      var lineno = 29;
      var colno = 7;
      var output = "";
      try {
        var frame = frame.push(true);
        cb(null, output);
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_skipLink(env, context, frame, runtime, cb) {
      var lineno = 31;
      var colno = 7;
      var output = "";
      try {
        var frame = frame.push(true);
        output += "\n      ";
        output += runtime.suppressValue((lineno = 32, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukSkipLink"), "govukSkipLink", context, [{ "href": "#main-content", "text": "Skip to main content" }])), env.opts.autoescape);
        output += "\n    ";
        cb(null, output);
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_header(env, context, frame, runtime, cb) {
      var lineno = 38;
      var colno = 7;
      var output = "";
      try {
        var frame = frame.push(true);
        output += "\n      ";
        output += runtime.suppressValue((lineno = 39, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukHeader"), "govukHeader", context, [{}])), env.opts.autoescape);
        output += "\n    ";
        cb(null, output);
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_main(env, context, frame, runtime, cb) {
      var lineno = 42;
      var colno = 7;
      var output = "";
      try {
        var frame = frame.push(true);
        output += '\n      <div class="govuk-width-container';
        if (runtime.contextOrFrameLookup(context, frame, "containerClasses")) {
          output += " ";
          output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "containerClasses"), env.opts.autoescape);
          ;
        }
        output += '">\n        ';
        context.getBlock("beforeContent")(env, context, frame, runtime, function(t_36, t_35) {
          if (t_36) {
            cb(t_36);
            return;
          }
          output += t_35;
          output += '\n        <main class="govuk-main-wrapper';
          if (runtime.contextOrFrameLookup(context, frame, "mainClasses")) {
            output += " ";
            output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "mainClasses"), env.opts.autoescape);
            ;
          }
          output += '" id="main-content"';
          if (runtime.contextOrFrameLookup(context, frame, "mainLang")) {
            output += ' lang="';
            output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "mainLang"), env.opts.autoescape);
            output += '"';
            ;
          }
          output += ">\n          ";
          context.getBlock("content")(env, context, frame, runtime, function(t_38, t_37) {
            if (t_38) {
              cb(t_38);
              return;
            }
            output += t_37;
            output += "\n        </main>\n      </div>\n    ";
            cb(null, output);
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_beforeContent(env, context, frame, runtime, cb) {
      var lineno = 44;
      var colno = 11;
      var output = "";
      try {
        var frame = frame.push(true);
        cb(null, output);
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_content(env, context, frame, runtime, cb) {
      var lineno = 46;
      var colno = 13;
      var output = "";
      try {
        var frame = frame.push(true);
        cb(null, output);
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_footer(env, context, frame, runtime, cb) {
      var lineno = 51;
      var colno = 7;
      var output = "";
      try {
        var frame = frame.push(true);
        output += "\n      ";
        output += runtime.suppressValue((lineno = 52, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukFooter"), "govukFooter", context, [{}])), env.opts.autoescape);
        output += "\n    ";
        cb(null, output);
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_bodyEnd(env, context, frame, runtime, cb) {
      var lineno = 55;
      var colno = 7;
      var output = "";
      try {
        var frame = frame.push(true);
        cb(null, output);
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      b_pageTitle,
      b_headIcons,
      b_head,
      b_bodyStart,
      b_skipLink,
      b_header,
      b_main,
      b_beforeContent,
      b_content,
      b_footer,
      b_bodyEnd,
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/button/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/button/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenButton");
        context.setVariable("LBCamdenButton", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/button/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var t_1;
        t_1 = "lbcamden-button";
        frame.set("classNames", t_1, true);
        if (frame.topLevel) {
          context.setVariable("classNames", t_1);
        }
        if (frame.topLevel) {
          context.addExport("classNames", t_1);
        }
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
          output += "\n  ";
          var t_2;
          t_2 = runtime.contextOrFrameLookup(context, frame, "classNames") + " " + runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes");
          frame.set("classNames", t_2, true);
          if (frame.topLevel) {
            context.setVariable("classNames", t_2);
          }
          if (frame.topLevel) {
            context.addExport("classNames", t_2);
          }
          output += "\n";
          ;
        }
        output += "\n";
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "disabled")) {
          output += "\n  ";
          var t_3;
          t_3 = runtime.contextOrFrameLookup(context, frame, "classNames") + " lbcamden-button--disabled";
          frame.set("classNames", t_3, true);
          if (frame.topLevel) {
            context.setVariable("classNames", t_3);
          }
          if (frame.topLevel) {
            context.addExport("classNames", t_3);
          }
          output += "\n";
          ;
        }
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "largeButton")) {
          output += "\n  ";
          var t_4;
          t_4 = runtime.contextOrFrameLookup(context, frame, "classNames") + " lbcamden-button--large";
          frame.set("classNames", t_4, true);
          if (frame.topLevel) {
            context.setVariable("classNames", t_4);
          }
          if (frame.topLevel) {
            context.addExport("classNames", t_4);
          }
          output += "\n";
          ;
        }
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "element")) {
          output += "\n  ";
          var t_5;
          t_5 = env.getFilter("lower").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "element"));
          frame.set("element", t_5, true);
          if (frame.topLevel) {
            context.setVariable("element", t_5);
          }
          if (frame.topLevel) {
            context.addExport("element", t_5);
          }
          output += "\n";
          ;
        } else {
          output += "\n  ";
          if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "href")) {
            output += "\n    ";
            var t_6;
            t_6 = "a";
            frame.set("element", t_6, true);
            if (frame.topLevel) {
              context.setVariable("element", t_6);
            }
            if (frame.topLevel) {
              context.addExport("element", t_6);
            }
            output += "\n  ";
            ;
          } else {
            output += "\n    ";
            var t_7;
            t_7 = "button";
            frame.set("element", t_7, true);
            if (frame.topLevel) {
              context.setVariable("element", t_7);
            }
            if (frame.topLevel) {
              context.addExport("element", t_7);
            }
            output += "\n  ";
            ;
          }
          output += "\n";
          ;
        }
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "isStartButton")) {
          output += "\n  ";
          var t_8;
          t_8 = function() {
            var output2 = "";
            output2 += "\n";
            output2 += "\n";
            output2 += "\n";
            output2 += '\n  <svg class="lbcamden-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" aria-hidden="true" focusable="false">\n    <path d="M4.48116 7L0.409421 11.3565H0.409258C0.05163 11.7527 -0.0842445 12.3214 0.0519564 12.8525C0.188157 13.3837 0.576033 13.7987 1.07245 13.9444C1.56887 14.0901 2.10045 13.9448 2.47074 13.5621L7.57322 8.10283C7.84641 7.81019 8 7.41361 8 7C8 6.58638 7.8464 6.1898 7.57322 5.89718L2.47074 0.437877C2.10042 0.0552407 1.56887 -0.0901382 1.07245 0.0555872C0.576033 0.201313 0.188161 0.616313 0.0519564 1.14745C-0.0842487 1.67858 0.0516291 2.24733 0.409258 2.64352L4.48116 7Z" fill="currentColor"/>\n  </svg>\n\n  ';
            ;
            return output2;
          }();
          frame.set("iconHtml", t_8, true);
          if (frame.topLevel) {
            context.setVariable("iconHtml", t_8);
          }
          if (frame.topLevel) {
            context.addExport("iconHtml", t_8);
          }
          output += "\n  ";
          var t_9;
          t_9 = runtime.contextOrFrameLookup(context, frame, "classNames") + " lbcamden-button--start";
          frame.set("classNames", t_9, true);
          if (frame.topLevel) {
            context.setVariable("classNames", t_9);
          }
          if (frame.topLevel) {
            context.addExport("classNames", t_9);
          }
          output += "\n";
          ;
        }
        var t_10;
        t_10 = function() {
          var output2 = "";
          output2 += ' class="';
          output2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "classNames"), env.opts.autoescape);
          output2 += '" data-module="lbcamden-button"';
          frame = frame.push();
          var t_13 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes");
          if (t_13) {
            t_13 = runtime.fromIterator(t_13);
            var t_11;
            if (runtime.isArray(t_13)) {
              var t_12 = t_13.length;
              for (t_11 = 0; t_11 < t_13.length; t_11++) {
                var t_14 = t_13[t_11][0];
                frame.set("[object Object]", t_13[t_11][0]);
                var t_15 = t_13[t_11][1];
                frame.set("[object Object]", t_13[t_11][1]);
                frame.set("loop.index", t_11 + 1);
                frame.set("loop.index0", t_11);
                frame.set("loop.revindex", t_12 - t_11);
                frame.set("loop.revindex0", t_12 - t_11 - 1);
                frame.set("loop.first", t_11 === 0);
                frame.set("loop.last", t_11 === t_12 - 1);
                frame.set("loop.length", t_12);
                output2 += " ";
                output2 += runtime.suppressValue(t_14, env.opts.autoescape);
                output2 += '="';
                output2 += runtime.suppressValue(t_15, env.opts.autoescape);
                output2 += '"';
                ;
              }
            } else {
              t_11 = -1;
              var t_12 = runtime.keys(t_13).length;
              for (var t_16 in t_13) {
                t_11++;
                var t_17 = t_13[t_16];
                frame.set("attribute", t_16);
                frame.set("value", t_17);
                frame.set("loop.index", t_11 + 1);
                frame.set("loop.index0", t_11);
                frame.set("loop.revindex", t_12 - t_11);
                frame.set("loop.revindex0", t_12 - t_11 - 1);
                frame.set("loop.first", t_11 === 0);
                frame.set("loop.last", t_11 === t_12 - 1);
                frame.set("loop.length", t_12);
                output2 += " ";
                output2 += runtime.suppressValue(t_16, env.opts.autoescape);
                output2 += '="';
                output2 += runtime.suppressValue(t_17, env.opts.autoescape);
                output2 += '"';
                ;
              }
            }
          }
          frame = frame.pop();
          ;
          return output2;
        }();
        frame.set("commonAttributes", t_10, true);
        if (frame.topLevel) {
          context.setVariable("commonAttributes", t_10);
        }
        if (frame.topLevel) {
          context.addExport("commonAttributes", t_10);
        }
        var t_18;
        t_18 = function() {
          var output2 = "";
          if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "name")) {
            output2 += ' name="';
            output2 += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "name"), env.opts.autoescape);
            output2 += '"';
            ;
          }
          if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "disabled")) {
            output2 += ' disabled="disabled" aria-disabled="true"';
            ;
          }
          if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "preventDoubleClick")) {
            output2 += ' data-prevent-double-click="true"';
            ;
          }
          ;
          return output2;
        }();
        frame.set("buttonAttributes", t_18, true);
        if (frame.topLevel) {
          context.setVariable("buttonAttributes", t_18);
        }
        if (frame.topLevel) {
          context.addExport("buttonAttributes", t_18);
        }
        if (runtime.contextOrFrameLookup(context, frame, "element") == "a") {
          output += '\n<a href="';
          output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "href") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "href") : "#", env.opts.autoescape);
          output += '" role="button" draggable="false"';
          output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "commonAttributes")), env.opts.autoescape);
          output += ">\n  ";
          output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html") ? env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html")) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text"), env.opts.autoescape);
          output += "\n";
          output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "iconHtml") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "iconHtml"))), 2, true) : "", env.opts.autoescape);
          output += "</a>";
          ;
        } else {
          if (runtime.contextOrFrameLookup(context, frame, "element") == "button") {
            output += "\n<button";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "value")) {
              output += ' value="';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "value"), env.opts.autoescape);
              output += '"';
              ;
            }
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "type")) {
              output += ' type="';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "type"), env.opts.autoescape);
              output += '"';
              ;
            }
            output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "buttonAttributes")), env.opts.autoescape);
            output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "commonAttributes")), env.opts.autoescape);
            output += ">\n  ";
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html") ? env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "html")) : runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text"), env.opts.autoescape);
            output += "\n";
            output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "iconHtml") ? env.getFilter("indent").call(context, env.getFilter("trim").call(context, env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "iconHtml"))), 2, true) : "", env.opts.autoescape);
            output += "</button>";
            ;
          } else {
            if (runtime.contextOrFrameLookup(context, frame, "element") == "input") {
              output += '\n<input value="';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text"), env.opts.autoescape);
              output += '" type="';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "type") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "type") : "submit", env.opts.autoescape);
              output += '"';
              output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "buttonAttributes")), env.opts.autoescape);
              output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "commonAttributes")), env.opts.autoescape);
              output += ">";
              ;
            }
            ;
          }
          ;
        }
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/campaign-engagement-banner/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/campaign-engagement-banner/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenCampaignEngagementBanner");
        context.setVariable("LBCamdenCampaignEngagementBanner", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/campaign-engagement-banner/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../image/macro.njk", false, "src/lbcamden/components/campaign-engagement-banner/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "LBCamdenImage")) {
              var t_4 = t_12.LBCamdenImage;
            } else {
              cb(new Error("cannot import 'LBCamdenImage'"));
              return;
            }
            context.setVariable("LBCamdenImage", t_4);
            output += '\n<section role="banner"\n         class="lbcamden-campaign-engagement-banner lbcamden-campaign-engagement-banner--';
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "orientation"), env.opts.autoescape);
            output += '">\n    ';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "orientation") == "text-right") {
              output += runtime.suppressValue((lineno = 3, colno = 63, runtime.callWrap(t_4, "LBCamdenImage", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image")])), env.opts.autoescape);
              ;
            }
            output += '\n    <div class="lbcamden-campaign-engagement-banner__content">\n        <h2>\n            <a href="';
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "link"), env.opts.autoescape);
            output += '">';
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading"), env.opts.autoescape);
            output += "</a>\n        </h2>\n        ";
            output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "shortDescription")), env.opts.autoescape);
            output += "\n    </div>\n    ";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "orientation") == "text-left") {
              output += runtime.suppressValue((lineno = 10, colno = 62, runtime.callWrap(t_4, "LBCamdenImage", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image")])), env.opts.autoescape);
              ;
            }
            output += "\n</section>\n\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/campaign-hero/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/campaign-hero/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenCampaignHero");
        context.setVariable("LBCamdenCampaignHero", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/campaign-hero/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../image/macro.njk", false, "src/lbcamden/components/campaign-hero/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "LBCamdenImage")) {
              var t_4 = t_12.LBCamdenImage;
            } else {
              cb(new Error("cannot import 'LBCamdenImage'"));
              return;
            }
            context.setVariable("LBCamdenImage", t_4);
            output += '\n<div class="lbcamden-campaign-hero">\n    <div class="lbcamden-campaign-hero__content">\n        <h1>';
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "title"), env.opts.autoescape);
            output += "</h1>\n        ";
            output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "extract")), env.opts.autoescape);
            output += "\n    </div>\n    ";
            output += runtime.suppressValue((lineno = 6, colno = 20, runtime.callWrap(t_4, "LBCamdenImage", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image")])), env.opts.autoescape);
            output += "\n</div>";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/card/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/card/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenCard");
        context.setVariable("LBCamdenCard", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/card/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../image/macro.njk", false, "src/lbcamden/components/card/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "LBCamdenImage")) {
              var t_4 = t_12.LBCamdenImage;
            } else {
              cb(new Error("cannot import 'LBCamdenImage'"));
              return;
            }
            context.setVariable("LBCamdenImage", t_4);
            output += "\n\n";
            var t_5;
            t_5 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "element") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "element") : "div";
            frame.set("containerElement", t_5, true);
            if (frame.topLevel) {
              context.setVariable("containerElement", t_5);
            }
            if (frame.topLevel) {
              context.addExport("containerElement", t_5);
            }
            output += "\n";
            var t_6;
            t_6 = runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading"), "headingLevel") ? runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading"), "headingLevel") : 2;
            frame.set("headingLevel", t_6, true);
            if (frame.topLevel) {
              context.setVariable("headingLevel", t_6);
            }
            if (frame.topLevel) {
              context.addExport("headingLevel", t_6);
            }
            output += "\n<";
            output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "containerElement"), env.opts.autoescape);
            output += '\n  class="lbcamden-card ';
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes") : "", env.opts.autoescape);
            output += "\n  ";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "type")) {
              output += "\n  lbcamden-card--";
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "type"), env.opts.autoescape);
              output += "\n  ";
              ;
            }
            output += "\n  ";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "clickable")) {
              output += " lbcamden-card--clickable";
              ;
            }
            output += "\n  ";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "topBorder")) {
              output += " lbcamden-card--top-border";
              ;
            }
            output += "\n  ";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image")) {
              output += " lbcamden-card--image";
              ;
            }
            output += '"\n  data-module="lbcamden-card"';
            frame = frame.push();
            var t_9 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes");
            if (t_9) {
              t_9 = runtime.fromIterator(t_9);
              var t_7;
              if (runtime.isArray(t_9)) {
                var t_8 = t_9.length;
                for (t_7 = 0; t_7 < t_9.length; t_7++) {
                  var t_10 = t_9[t_7][0];
                  frame.set("[object Object]", t_9[t_7][0]);
                  var t_11 = t_9[t_7][1];
                  frame.set("[object Object]", t_9[t_7][1]);
                  frame.set("loop.index", t_7 + 1);
                  frame.set("loop.index0", t_7);
                  frame.set("loop.revindex", t_8 - t_7);
                  frame.set("loop.revindex0", t_8 - t_7 - 1);
                  frame.set("loop.first", t_7 === 0);
                  frame.set("loop.last", t_7 === t_8 - 1);
                  frame.set("loop.length", t_8);
                  output += " ";
                  output += runtime.suppressValue(t_10, env.opts.autoescape);
                  output += '="';
                  output += runtime.suppressValue(t_11, env.opts.autoescape);
                  output += '"';
                  ;
                }
              } else {
                t_7 = -1;
                var t_8 = runtime.keys(t_9).length;
                for (var t_122 in t_9) {
                  t_7++;
                  var t_13 = t_9[t_122];
                  frame.set("attribute", t_122);
                  frame.set("value", t_13);
                  frame.set("loop.index", t_7 + 1);
                  frame.set("loop.index0", t_7);
                  frame.set("loop.revindex", t_8 - t_7);
                  frame.set("loop.revindex0", t_8 - t_7 - 1);
                  frame.set("loop.first", t_7 === 0);
                  frame.set("loop.last", t_7 === t_8 - 1);
                  frame.set("loop.length", t_8);
                  output += " ";
                  output += runtime.suppressValue(t_122, env.opts.autoescape);
                  output += '="';
                  output += runtime.suppressValue(t_13, env.opts.autoescape);
                  output += '"';
                  ;
                }
              }
            }
            frame = frame.pop();
            output += ">\n";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image")) {
              output += "\n  ";
              output += runtime.suppressValue((lineno = 15, colno = 18, runtime.callWrap(t_4, "LBCamdenImage", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image")])), env.opts.autoescape);
              output += '\n  <div class="lbcamden-card__content_wrapper">\n';
              ;
            }
            output += "\n";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading")) {
              output += "\n<h";
              output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "headingLevel"), env.opts.autoescape);
              output += '\n  class="govuk-heading-m">\n  ';
              if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading"), "href")) {
                output += '\n    <a href="';
                output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading"), "href"), env.opts.autoescape);
                output += '">\n      ';
                output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading"), "title"), env.opts.autoescape);
                output += "\n    </a>\n  ";
                ;
              } else {
                output += "\n    ";
                output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading"), "title"), env.opts.autoescape);
                output += "\n  ";
                ;
              }
              output += "\n</h";
              output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "headingLevel"), env.opts.autoescape);
              output += ">\n";
              ;
            }
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "content")) {
              output += '\n  <div class="lbcamden-card__content">\n    ';
              if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "content"), "text")) {
                output += "\n      <p>";
                output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "content"), "text"), env.opts.autoescape);
                output += "</p>\n    ";
                ;
              } else {
                output += "\n      <p>";
                output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "content"), "html")), env.opts.autoescape);
                output += "</p>\n    ";
                ;
              }
              output += "\n  </div>";
              ;
            }
            output += "\n";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image")) {
              output += "\n  </div>\n";
              ;
            }
            output += "\n</";
            output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "containerElement"), env.opts.autoescape);
            output += ">\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/card-gallery/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/card-gallery/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenCardGallery");
        context.setVariable("LBCamdenCardGallery", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/card-gallery/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../card/macro.njk", false, "src/lbcamden/components/card-gallery/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "LBCamdenCard")) {
              var t_4 = t_12.LBCamdenCard;
            } else {
              cb(new Error("cannot import 'LBCamdenCard'"));
              return;
            }
            context.setVariable("LBCamdenCard", t_4);
            output += '\n\n<div class="lbcamden-card-gallery ';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "surround")) {
              output += "lbcamden-surround ";
              ;
            }
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
            output += '">\n    ';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading")) {
              output += "\n      <h2>";
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading"), env.opts.autoescape);
              output += "</h2>\n    ";
              ;
            }
            output += "\n\n    ";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "shortDescription")) {
              output += '\n      <p class="lbcamden-card-gallery__description">\n        ';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "shortDescription"), env.opts.autoescape);
              output += "\n      </p>\n    ";
              ;
            }
            output += '\n\n    <ul class="lbcamden-card-grid">\n        ';
            frame = frame.push();
            var t_7 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "items");
            if (t_7) {
              t_7 = runtime.fromIterator(t_7);
              var t_6 = t_7.length;
              for (var t_5 = 0; t_5 < t_7.length; t_5++) {
                var t_8 = t_7[t_5];
                frame.set("item", t_8);
                frame.set("loop.index", t_5 + 1);
                frame.set("loop.index0", t_5);
                frame.set("loop.revindex", t_6 - t_5);
                frame.set("loop.revindex0", t_6 - t_5 - 1);
                frame.set("loop.first", t_5 === 0);
                frame.set("loop.last", t_5 === t_6 - 1);
                frame.set("loop.length", t_6);
                output += '\n            <li class="lbcamden-card-grid--link-wrapper">\n              ';
                output += runtime.suppressValue((lineno = 16, colno = 29, runtime.callWrap(t_4, "LBCamdenCard", context, [{ "heading": { "title": runtime.memberLookup(t_8, "title"), "href": runtime.memberLookup(t_8, "href"), "headingLevel": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "cardHeadingLevel") }, "content": runtime.memberLookup(t_8, "shortDescription") ? { "text": runtime.memberLookup(t_8, "shortDescription") } : null, "classes": "lbcamden-card--image-3x2", "image": runtime.memberLookup(t_8, "image"), "type": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "cardType") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "cardType") : "naked" }])), env.opts.autoescape);
                output += "\n            </li>\n        ";
                ;
              }
            }
            frame = frame.pop();
            output += "\n    </ul>\n</div>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/directory-record/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/directory-record/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenDirectoryRecord");
        context.setVariable("LBCamdenDirectoryRecord", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/directory-record/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        output += '<article class="lbcamden-directory-record">\n  <h2';
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "recordId")) {
          output += ' id="';
          output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "recordId"), env.opts.autoescape);
          output += '"';
          ;
        }
        output += ">";
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "title"), env.opts.autoescape);
        output += "</h2>\n  ";
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "alias")) {
          output += "<p>";
          output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "alias"), env.opts.autoescape);
          output += "</p>";
          ;
        }
        output += "\n  <dl>\n    ";
        frame = frame.push();
        var t_3 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "items");
        if (t_3) {
          t_3 = runtime.fromIterator(t_3);
          var t_2 = t_3.length;
          for (var t_1 = 0; t_1 < t_3.length; t_1++) {
            var t_4 = t_3[t_1];
            frame.set("item", t_4);
            frame.set("loop.index", t_1 + 1);
            frame.set("loop.index0", t_1);
            frame.set("loop.revindex", t_2 - t_1);
            frame.set("loop.revindex0", t_2 - t_1 - 1);
            frame.set("loop.first", t_1 === 0);
            frame.set("loop.last", t_1 === t_2 - 1);
            frame.set("loop.length", t_2);
            output += "\n    <dt>";
            output += runtime.suppressValue(runtime.memberLookup(t_4, "label"), env.opts.autoescape);
            output += '</dt>\n    <dd class="govuk-body">';
            output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup(t_4, "value")), env.opts.autoescape);
            output += "</dd>\n    ";
            ;
          }
        }
        frame = frame.pop();
        output += "\n  </dl>\n</article>";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/emergency-banner/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/emergency-banner/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenEmergencyBanner");
        context.setVariable("LBCamdenEmergencyBanner", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/emergency-banner/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        output += '<section role="banner" class="lbcamden-emergency-banner lbcamden-emergency-banner--';
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "campaignClass"), env.opts.autoescape);
        output += " ";
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "homepage")) {
          output += "lbcamden-emergency-banner--homepage";
          ;
        }
        output += " ";
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
        output += '">\n  <div class="govuk-width-container">\n    <div class="govuk-grid-row">\n      <div class="govuk-grid-column-two-thirds lbcamden-emergency-banner__content">\n        <h2 class="';
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "headingClasses"), env.opts.autoescape);
        output += '">';
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading"), env.opts.autoescape);
        output += "</h2>\n\n        ";
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "shortDescription")) {
          output += "\n          ";
          output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "shortDescription")), env.opts.autoescape);
          output += "\n        ";
          ;
        }
        output += "\n\n        ";
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "link")) {
          output += '\n          <a href="';
          output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "link"), env.opts.autoescape);
          output += '">\n            ';
          output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "linkText"), env.opts.autoescape);
          output += "\n          </a>\n        ";
          ;
        }
        output += "\n      </div>\n    </div>\n  </div>\n</section>\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/engagement-banner/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/engagement-banner/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenEngagementBanner");
        context.setVariable("LBCamdenEngagementBanner", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/engagement-banner/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../image/macro.njk", false, "src/lbcamden/components/engagement-banner/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "LBCamdenImage")) {
              var t_4 = t_12.LBCamdenImage;
            } else {
              cb(new Error("cannot import 'LBCamdenImage'"));
              return;
            }
            context.setVariable("LBCamdenImage", t_4);
            output += '\n\n<section role="banner" class="lbcamden-engagement-banner ';
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
            output += '">\n  <h2 class="lbcamden-engagement-banner__heading--mobile">';
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading"), env.opts.autoescape);
            output += "</h2>\n  ";
            output += runtime.suppressValue((lineno = 4, colno = 18, runtime.callWrap(t_4, "LBCamdenImage", context, [{ "classes": "lbcamden-engagement-banner__image", "sources": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image"), "sources"), "alt": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image"), "alt"), "lazy": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image"), "lazy"), "src": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image"), "src"), "widths": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image"), "widths") }])), env.opts.autoescape);
            output += '\n\n  <div class="lbcamden-engagement-banner__content">\n    <h2>';
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading"), env.opts.autoescape);
            output += "</h2>\n    ";
            output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "shortDescription")), env.opts.autoescape);
            output += '\n\n    <a href="';
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "link"), env.opts.autoescape);
            output += '">\n      ';
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "linkText"), env.opts.autoescape);
            output += "\n    </a>\n  </div>\n</section>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/footer/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/footer/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenFooter");
        context.setVariable("LBCamdenFooter", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/footer/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../logo/macro.njk", false, "src/lbcamden/components/footer/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "LBCamdenLogo")) {
              var t_4 = t_12.LBCamdenLogo;
            } else {
              cb(new Error("cannot import 'LBCamdenLogo'"));
              return;
            }
            context.setVariable("LBCamdenLogo", t_4);
            output += "\n";
            env.getTemplate("../image/macro.njk", false, "src/lbcamden/components/footer/template.njk", false, function(t_6, t_5) {
              if (t_6) {
                cb(t_6);
                return;
              }
              t_5.getExported(function(t_7, t_52) {
                if (t_7) {
                  cb(t_7);
                  return;
                }
                if (Object.prototype.hasOwnProperty.call(t_52, "LBCamdenImage")) {
                  var t_8 = t_52.LBCamdenImage;
                } else {
                  cb(new Error("cannot import 'LBCamdenImage'"));
                  return;
                }
                context.setVariable("LBCamdenImage", t_8);
                output += '\n\n<footer class="lbcamden-footer ';
                output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
                output += '" role="contentinfo"';
                frame = frame.push();
                var t_11 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes");
                if (t_11) {
                  t_11 = runtime.fromIterator(t_11);
                  var t_9;
                  if (runtime.isArray(t_11)) {
                    var t_10 = t_11.length;
                    for (t_9 = 0; t_9 < t_11.length; t_9++) {
                      var t_122 = t_11[t_9][0];
                      frame.set("[object Object]", t_11[t_9][0]);
                      var t_13 = t_11[t_9][1];
                      frame.set("[object Object]", t_11[t_9][1]);
                      frame.set("loop.index", t_9 + 1);
                      frame.set("loop.index0", t_9);
                      frame.set("loop.revindex", t_10 - t_9);
                      frame.set("loop.revindex0", t_10 - t_9 - 1);
                      frame.set("loop.first", t_9 === 0);
                      frame.set("loop.last", t_9 === t_10 - 1);
                      frame.set("loop.length", t_10);
                      output += " ";
                      output += runtime.suppressValue(t_122, env.opts.autoescape);
                      output += '="';
                      output += runtime.suppressValue(t_13, env.opts.autoescape);
                      output += '"';
                      ;
                    }
                  } else {
                    t_9 = -1;
                    var t_10 = runtime.keys(t_11).length;
                    for (var t_14 in t_11) {
                      t_9++;
                      var t_15 = t_11[t_14];
                      frame.set("attribute", t_14);
                      frame.set("value", t_15);
                      frame.set("loop.index", t_9 + 1);
                      frame.set("loop.index0", t_9);
                      frame.set("loop.revindex", t_10 - t_9);
                      frame.set("loop.revindex0", t_10 - t_9 - 1);
                      frame.set("loop.first", t_9 === 0);
                      frame.set("loop.last", t_9 === t_10 - 1);
                      frame.set("loop.length", t_10);
                      output += " ";
                      output += runtime.suppressValue(t_14, env.opts.autoescape);
                      output += '="';
                      output += runtime.suppressValue(t_15, env.opts.autoescape);
                      output += '"';
                      ;
                    }
                  }
                }
                frame = frame.pop();
                output += '>\n  <div class="govuk-width-container">\n    ';
                if (env.getFilter("length").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigation")) || runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigationSocial"), "length") || runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigationSocial")) {
                  output += '\n    <h2 class="govuk-visually-hidden">Site navigation</h2>\n    <div class="govuk-row lbcamden-footer__navigation">\n      <ul class="lbcamden-footer__list lbcamden-footer__list--primary govuk-grid-column-two-thirds-from-desktop">\n        ';
                  frame = frame.push();
                  var t_18 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigation");
                  if (t_18) {
                    t_18 = runtime.fromIterator(t_18);
                    var t_17 = t_18.length;
                    for (var t_16 = 0; t_16 < t_18.length; t_16++) {
                      var t_19 = t_18[t_16];
                      frame.set("item", t_19);
                      frame.set("loop.index", t_16 + 1);
                      frame.set("loop.index0", t_16);
                      frame.set("loop.revindex", t_17 - t_16);
                      frame.set("loop.revindex0", t_17 - t_16 - 1);
                      frame.set("loop.first", t_16 === 0);
                      frame.set("loop.last", t_16 === t_17 - 1);
                      frame.set("loop.length", t_17);
                      output += '\n          <li class="lbcamden-footer__list-item">\n            <a href="';
                      output += runtime.suppressValue(runtime.memberLookup(t_19, "href"), env.opts.autoescape);
                      output += '"';
                      frame = frame.push();
                      var t_22 = runtime.memberLookup(t_19, "attributes");
                      if (t_22) {
                        t_22 = runtime.fromIterator(t_22);
                        var t_20;
                        if (runtime.isArray(t_22)) {
                          var t_21 = t_22.length;
                          for (t_20 = 0; t_20 < t_22.length; t_20++) {
                            var t_23 = t_22[t_20][0];
                            frame.set("[object Object]", t_22[t_20][0]);
                            var t_24 = t_22[t_20][1];
                            frame.set("[object Object]", t_22[t_20][1]);
                            frame.set("loop.index", t_20 + 1);
                            frame.set("loop.index0", t_20);
                            frame.set("loop.revindex", t_21 - t_20);
                            frame.set("loop.revindex0", t_21 - t_20 - 1);
                            frame.set("loop.first", t_20 === 0);
                            frame.set("loop.last", t_20 === t_21 - 1);
                            frame.set("loop.length", t_21);
                            output += " ";
                            output += runtime.suppressValue(t_23, env.opts.autoescape);
                            output += '="';
                            output += runtime.suppressValue(t_24, env.opts.autoescape);
                            output += '"';
                            ;
                          }
                        } else {
                          t_20 = -1;
                          var t_21 = runtime.keys(t_22).length;
                          for (var t_25 in t_22) {
                            t_20++;
                            var t_26 = t_22[t_25];
                            frame.set("attribute", t_25);
                            frame.set("value", t_26);
                            frame.set("loop.index", t_20 + 1);
                            frame.set("loop.index0", t_20);
                            frame.set("loop.revindex", t_21 - t_20);
                            frame.set("loop.revindex0", t_21 - t_20 - 1);
                            frame.set("loop.first", t_20 === 0);
                            frame.set("loop.last", t_20 === t_21 - 1);
                            frame.set("loop.length", t_21);
                            output += " ";
                            output += runtime.suppressValue(t_25, env.opts.autoescape);
                            output += '="';
                            output += runtime.suppressValue(t_26, env.opts.autoescape);
                            output += '"';
                            ;
                          }
                        }
                      }
                      frame = frame.pop();
                      output += ">";
                      output += runtime.suppressValue(runtime.memberLookup(t_19, "text"), env.opts.autoescape);
                      output += "</a>\n          </li>\n        ";
                      ;
                    }
                  }
                  frame = frame.pop();
                  output += '\n      </ul>\n      <div class="lbcamden-footer__section lbcamden-footer__socials govuk-grid-column-full govuk-grid-column-one-third-from-desktop">\n        <div>\n          ';
                  if (env.getFilter("length").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigationSecondary"))) {
                    output += '\n            <ul class="lbcamden-footer__list lbcamden-footer__list--utility">\n              ';
                    frame = frame.push();
                    var t_29 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigationSecondary");
                    if (t_29) {
                      t_29 = runtime.fromIterator(t_29);
                      var t_28 = t_29.length;
                      for (var t_27 = 0; t_27 < t_29.length; t_27++) {
                        var t_30 = t_29[t_27];
                        frame.set("item", t_30);
                        frame.set("loop.index", t_27 + 1);
                        frame.set("loop.index0", t_27);
                        frame.set("loop.revindex", t_28 - t_27);
                        frame.set("loop.revindex0", t_28 - t_27 - 1);
                        frame.set("loop.first", t_27 === 0);
                        frame.set("loop.last", t_27 === t_28 - 1);
                        frame.set("loop.length", t_28);
                        output += '\n                <li class="lbcamden-footer__list-item">\n                  <a href="';
                        output += runtime.suppressValue(runtime.memberLookup(t_30, "href"), env.opts.autoescape);
                        output += '"';
                        frame = frame.push();
                        var t_33 = runtime.memberLookup(t_30, "attributes");
                        if (t_33) {
                          t_33 = runtime.fromIterator(t_33);
                          var t_31;
                          if (runtime.isArray(t_33)) {
                            var t_32 = t_33.length;
                            for (t_31 = 0; t_31 < t_33.length; t_31++) {
                              var t_34 = t_33[t_31][0];
                              frame.set("[object Object]", t_33[t_31][0]);
                              var t_35 = t_33[t_31][1];
                              frame.set("[object Object]", t_33[t_31][1]);
                              frame.set("loop.index", t_31 + 1);
                              frame.set("loop.index0", t_31);
                              frame.set("loop.revindex", t_32 - t_31);
                              frame.set("loop.revindex0", t_32 - t_31 - 1);
                              frame.set("loop.first", t_31 === 0);
                              frame.set("loop.last", t_31 === t_32 - 1);
                              frame.set("loop.length", t_32);
                              output += " ";
                              output += runtime.suppressValue(t_34, env.opts.autoescape);
                              output += '="';
                              output += runtime.suppressValue(t_35, env.opts.autoescape);
                              output += '"';
                              ;
                            }
                          } else {
                            t_31 = -1;
                            var t_32 = runtime.keys(t_33).length;
                            for (var t_36 in t_33) {
                              t_31++;
                              var t_37 = t_33[t_36];
                              frame.set("attribute", t_36);
                              frame.set("value", t_37);
                              frame.set("loop.index", t_31 + 1);
                              frame.set("loop.index0", t_31);
                              frame.set("loop.revindex", t_32 - t_31);
                              frame.set("loop.revindex0", t_32 - t_31 - 1);
                              frame.set("loop.first", t_31 === 0);
                              frame.set("loop.last", t_31 === t_32 - 1);
                              frame.set("loop.length", t_32);
                              output += " ";
                              output += runtime.suppressValue(t_36, env.opts.autoescape);
                              output += '="';
                              output += runtime.suppressValue(t_37, env.opts.autoescape);
                              output += '"';
                              ;
                            }
                          }
                        }
                        frame = frame.pop();
                        output += ">";
                        output += runtime.suppressValue(runtime.memberLookup(t_30, "text"), env.opts.autoescape);
                        output += "</a>\n                </li>\n              ";
                        ;
                      }
                    }
                    frame = frame.pop();
                    output += "\n            </ul>\n          ";
                    ;
                  }
                  output += "\n\n          ";
                  if (env.getFilter("length").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigationSocial"))) {
                    output += '\n          <h3>Follow us on social media</h3>\n          <ul class="lbcamden-footer__list lbcamden-footer__list--social">\n            ';
                    frame = frame.push();
                    var t_40 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigationSocial");
                    if (t_40) {
                      t_40 = runtime.fromIterator(t_40);
                      var t_39 = t_40.length;
                      for (var t_38 = 0; t_38 < t_40.length; t_38++) {
                        var t_41 = t_40[t_38];
                        frame.set("item", t_41);
                        frame.set("loop.index", t_38 + 1);
                        frame.set("loop.index0", t_38);
                        frame.set("loop.revindex", t_39 - t_38);
                        frame.set("loop.revindex0", t_39 - t_38 - 1);
                        frame.set("loop.first", t_38 === 0);
                        frame.set("loop.last", t_38 === t_39 - 1);
                        frame.set("loop.length", t_39);
                        output += '\n              <li class="lbcamden-footer__list--social__item">\n                <a rel="noreferrer noopener" href="';
                        output += runtime.suppressValue(runtime.memberLookup(t_41, "href"), env.opts.autoescape);
                        output += '"';
                        frame = frame.push();
                        var t_44 = runtime.memberLookup(t_41, "attributes");
                        if (t_44) {
                          t_44 = runtime.fromIterator(t_44);
                          var t_42;
                          if (runtime.isArray(t_44)) {
                            var t_43 = t_44.length;
                            for (t_42 = 0; t_42 < t_44.length; t_42++) {
                              var t_45 = t_44[t_42][0];
                              frame.set("[object Object]", t_44[t_42][0]);
                              var t_46 = t_44[t_42][1];
                              frame.set("[object Object]", t_44[t_42][1]);
                              frame.set("loop.index", t_42 + 1);
                              frame.set("loop.index0", t_42);
                              frame.set("loop.revindex", t_43 - t_42);
                              frame.set("loop.revindex0", t_43 - t_42 - 1);
                              frame.set("loop.first", t_42 === 0);
                              frame.set("loop.last", t_42 === t_43 - 1);
                              frame.set("loop.length", t_43);
                              output += " ";
                              output += runtime.suppressValue(t_45, env.opts.autoescape);
                              output += '="';
                              output += runtime.suppressValue(t_46, env.opts.autoescape);
                              output += '"';
                              ;
                            }
                          } else {
                            t_42 = -1;
                            var t_43 = runtime.keys(t_44).length;
                            for (var t_47 in t_44) {
                              t_42++;
                              var t_48 = t_44[t_47];
                              frame.set("attribute", t_47);
                              frame.set("value", t_48);
                              frame.set("loop.index", t_42 + 1);
                              frame.set("loop.index0", t_42);
                              frame.set("loop.revindex", t_43 - t_42);
                              frame.set("loop.revindex0", t_43 - t_42 - 1);
                              frame.set("loop.first", t_42 === 0);
                              frame.set("loop.last", t_42 === t_43 - 1);
                              frame.set("loop.length", t_43);
                              output += " ";
                              output += runtime.suppressValue(t_47, env.opts.autoescape);
                              output += '="';
                              output += runtime.suppressValue(t_48, env.opts.autoescape);
                              output += '"';
                              ;
                            }
                          }
                        }
                        frame = frame.pop();
                        output += ">";
                        output += runtime.suppressValue(runtime.memberLookup(t_41, "text"), env.opts.autoescape);
                        output += "</a>\n              </li>\n            ";
                        ;
                      }
                    }
                    frame = frame.pop();
                    output += "\n          </ul>\n          ";
                    ;
                  }
                  output += "\n          ";
                  if (env.getFilter("length").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "sponsorLogos"))) {
                    output += '\n          <div class="lbcamden-footer__sponsor-logos">\n            ';
                    frame = frame.push();
                    var t_51 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "sponsorLogos");
                    if (t_51) {
                      t_51 = runtime.fromIterator(t_51);
                      var t_50 = t_51.length;
                      for (var t_49 = 0; t_49 < t_51.length; t_49++) {
                        var t_522 = t_51[t_49];
                        frame.set("sponsor", t_522);
                        frame.set("loop.index", t_49 + 1);
                        frame.set("loop.index0", t_49);
                        frame.set("loop.revindex", t_50 - t_49);
                        frame.set("loop.revindex0", t_50 - t_49 - 1);
                        frame.set("loop.first", t_49 === 0);
                        frame.set("loop.last", t_49 === t_50 - 1);
                        frame.set("loop.length", t_50);
                        output += "\n              ";
                        if (runtime.memberLookup(t_522, "href")) {
                          output += '\n              <a class="lbcamden-footer__sponsor" href="';
                          output += runtime.suppressValue(runtime.memberLookup(t_522, "href"), env.opts.autoescape);
                          output += '">\n              ';
                          output += runtime.suppressValue((lineno = 42, colno = 30, runtime.callWrap(t_8, "LBCamdenImage", context, [runtime.memberLookup(t_522, "image")])), env.opts.autoescape);
                          output += "\n              </a>\n              ";
                          ;
                        } else {
                          output += '\n              <div class="lbcamden-footer__sponsor">\n              ';
                          output += runtime.suppressValue((lineno = 46, colno = 30, runtime.callWrap(t_8, "LBCamdenImage", context, [runtime.memberLookup(t_522, "image")])), env.opts.autoescape);
                          output += "\n              </div>\n              ";
                          ;
                        }
                        output += "\n            ";
                        ;
                      }
                    }
                    frame = frame.pop();
                    output += "\n          </div>\n          ";
                    ;
                  }
                  output += "\n        </div>\n      </div>\n    </div>\n    ";
                  ;
                }
                output += "\n    ";
                if ((env.getFilter("length").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigation")) || runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigationSocial"), "length")) && env.getFilter("length").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigationUtility"))) {
                  output += "\n      <hr />\n    ";
                  ;
                }
                output += '\n    <div class="lbcamden-footer__estate">\n      <div class="lbcamden-footer__section govuk-grid-column-full">\n        <ul class="lbcamden-footer__list">\n          ';
                frame = frame.push();
                var t_55 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigationUtility");
                if (t_55) {
                  t_55 = runtime.fromIterator(t_55);
                  var t_54 = t_55.length;
                  for (var t_53 = 0; t_53 < t_55.length; t_53++) {
                    var t_56 = t_55[t_53];
                    frame.set("item", t_56);
                    frame.set("loop.index", t_53 + 1);
                    frame.set("loop.index0", t_53);
                    frame.set("loop.revindex", t_54 - t_53);
                    frame.set("loop.revindex0", t_54 - t_53 - 1);
                    frame.set("loop.first", t_53 === 0);
                    frame.set("loop.last", t_53 === t_54 - 1);
                    frame.set("loop.length", t_54);
                    output += '\n          <li class="lbcamden-footer__list-item">\n            <a href="';
                    output += runtime.suppressValue(runtime.memberLookup(t_56, "href"), env.opts.autoescape);
                    output += '"';
                    frame = frame.push();
                    var t_59 = runtime.memberLookup(t_56, "attributes");
                    if (t_59) {
                      t_59 = runtime.fromIterator(t_59);
                      var t_57;
                      if (runtime.isArray(t_59)) {
                        var t_58 = t_59.length;
                        for (t_57 = 0; t_57 < t_59.length; t_57++) {
                          var t_60 = t_59[t_57][0];
                          frame.set("[object Object]", t_59[t_57][0]);
                          var t_61 = t_59[t_57][1];
                          frame.set("[object Object]", t_59[t_57][1]);
                          frame.set("loop.index", t_57 + 1);
                          frame.set("loop.index0", t_57);
                          frame.set("loop.revindex", t_58 - t_57);
                          frame.set("loop.revindex0", t_58 - t_57 - 1);
                          frame.set("loop.first", t_57 === 0);
                          frame.set("loop.last", t_57 === t_58 - 1);
                          frame.set("loop.length", t_58);
                          output += " ";
                          output += runtime.suppressValue(t_60, env.opts.autoescape);
                          output += '="';
                          output += runtime.suppressValue(t_61, env.opts.autoescape);
                          output += '"';
                          ;
                        }
                      } else {
                        t_57 = -1;
                        var t_58 = runtime.keys(t_59).length;
                        for (var t_62 in t_59) {
                          t_57++;
                          var t_63 = t_59[t_62];
                          frame.set("attribute", t_62);
                          frame.set("value", t_63);
                          frame.set("loop.index", t_57 + 1);
                          frame.set("loop.index0", t_57);
                          frame.set("loop.revindex", t_58 - t_57);
                          frame.set("loop.revindex0", t_58 - t_57 - 1);
                          frame.set("loop.first", t_57 === 0);
                          frame.set("loop.last", t_57 === t_58 - 1);
                          frame.set("loop.length", t_58);
                          output += " ";
                          output += runtime.suppressValue(t_62, env.opts.autoescape);
                          output += '="';
                          output += runtime.suppressValue(t_63, env.opts.autoescape);
                          output += '"';
                          ;
                        }
                      }
                    }
                    frame = frame.pop();
                    output += ">";
                    output += runtime.suppressValue(runtime.memberLookup(t_56, "text"), env.opts.autoescape);
                    output += "</a>\n          </li>\n          ";
                    ;
                  }
                }
                frame = frame.pop();
                output += '\n        </ul>\n      </div>\n    </div>\n    <div class="lbcamden-footer__lower govuk-grid-column-full">\n      <div class="lbcamden-footer__logo">\n        <a href="https://www.camden.gov.uk/" class="lbcamden-footer__link">\n          ';
                output += runtime.suppressValue((lineno = 73, colno = 25, runtime.callWrap(t_4, "LBCamdenLogo", context, [])), env.opts.autoescape);
                output += '\n          <span class="govuk-visually-hidden">Camden Council</span>\n        </a>\n      </div>\n      Copyright \xA9 The London Borough of Camden\n    </div>\n  </div>\n</footer>\n';
                if (parentTemplate) {
                  parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
                } else {
                  cb(null, output);
                }
              });
            });
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/guide-content/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/guide-content/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenGuideContent");
        context.setVariable("LBCamdenGuideContent", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/guide-content/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        output += '<div class="lbcamden-guide-content ';
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
        output += '" data-module="lbcamden-guide-content">\n  ';
        frame = frame.push();
        var t_3 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "items");
        if (t_3) {
          t_3 = runtime.fromIterator(t_3);
          var t_2 = t_3.length;
          for (var t_1 = 0; t_1 < t_3.length; t_1++) {
            var t_4 = t_3[t_1];
            frame.set("item", t_4);
            frame.set("loop.index", t_1 + 1);
            frame.set("loop.index0", t_1);
            frame.set("loop.revindex", t_2 - t_1);
            frame.set("loop.revindex0", t_2 - t_1 - 1);
            frame.set("loop.first", t_1 === 0);
            frame.set("loop.last", t_1 === t_2 - 1);
            frame.set("loop.length", t_2);
            output += '\n    <div data-guide-article="';
            output += runtime.suppressValue(runtime.memberLookup(t_4, "id"), env.opts.autoescape);
            output += '">\n      <article class="lbcamden-guide-content__item">\n        <h2 data-guide-heading>';
            output += runtime.suppressValue(runtime.memberLookup(t_4, "heading"), env.opts.autoescape);
            output += "</h2>\n\n        ";
            output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup(t_4, "html")), env.opts.autoescape);
            output += "\n      </article>\n    </div>\n  ";
            ;
          }
        }
        frame = frame.pop();
        output += '\n\n  <article data-guide-not-found hidden>\n    <h2></h2>\n    <div class="lbcamden-guide-content__item"></div>\n  </article>\n\n  <nav class="govuk-pagination govuk-pagination--block" role="navigation" aria-label="results">\n    <div class="govuk-pagination__prev">\n      <a class="govuk-link govuk-pagination__link" href="#" rel="prev">\n        <svg class="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">\n          <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>\n        </svg>\n        <span class="govuk-pagination__link-title">Previous</span><span class="govuk-visually-hidden">:</span>\n        <span class="govuk-pagination__link-label"></span>\n      </a>\n    </div>\n\n    <div class="govuk-pagination__next">\n      <a class="govuk-link govuk-pagination__link" href="#" rel="next">\n        <svg class="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">\n          <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>\n        </svg>\n        <span class="govuk-pagination__link-title">Next</span><span class="govuk-visually-hidden">:</span>\n        <span class="govuk-pagination__link-label"></span>\n      </a>\n    </div>\n  </nav>\n</div>\n';
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/guide-header/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/guide-header/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenGuideHeader");
        context.setVariable("LBCamdenGuideHeader", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/guide-header/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        output += '<ul class="lbcamden-guide-header lbcamden-list--dash ';
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
        output += '" data-module="lbcamden-guide-header">\n  ';
        frame = frame.push();
        var t_3 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "items");
        if (t_3) {
          t_3 = runtime.fromIterator(t_3);
          var t_2 = t_3.length;
          for (var t_1 = 0; t_1 < t_3.length; t_1++) {
            var t_4 = t_3[t_1];
            frame.set("item", t_4);
            frame.set("loop.index", t_1 + 1);
            frame.set("loop.index0", t_1);
            frame.set("loop.revindex", t_2 - t_1);
            frame.set("loop.revindex0", t_2 - t_1 - 1);
            frame.set("loop.first", t_1 === 0);
            frame.set("loop.last", t_1 === t_2 - 1);
            frame.set("loop.length", t_2);
            output += '\n    <li>\n      <a class="govuk-link" href="';
            output += runtime.suppressValue(runtime.memberLookup(t_4, "href"), env.opts.autoescape);
            output += '">\n        ';
            output += runtime.suppressValue(runtime.memberLookup(t_4, "text"), env.opts.autoescape);
            output += "\n      </a>\n    </li>\n  ";
            ;
          }
        }
        frame = frame.pop();
        output += "\n</ul>\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/header/includes/base.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params", "id_prefix", "site_name"],
          [],
          function(l_params, l_id_prefix, l_site_name, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            frame.set("id_prefix", l_id_prefix);
            frame.set("site_name", l_site_name);
            var t_2 = "";
            t_2 += "\n  ";
            if (runtime.memberLookup(l_params, "navigation") || runtime.memberLookup(l_params, "search") != false) {
              var tasks = [];
              tasks.push(
                function(callback) {
                  env.getTemplate("./navigation.njk", false, "src/lbcamden/components/header/includes/base.njk", false, function(t_4, t_3) {
                    if (t_4) {
                      cb(t_4);
                      return;
                    }
                    callback(null, t_3);
                  });
                }
              );
              tasks.push(
                function(template, callback) {
                  template.render(context.getVariables(), frame, function(t_6, t_5) {
                    if (t_6) {
                      cb(t_6);
                      return;
                    }
                    callback(null, t_5);
                  });
                }
              );
              tasks.push(
                function(result, callback) {
                  t_2 += result;
                  callback(null);
                }
              );
              env.waterfall(tasks, function() {
                t_2 += "\n  ";
              });
            }
            t_2 += "\n";
            ;
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenHeaderBase");
        context.setVariable("LBCamdenHeaderBase", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/header/includes/navigation.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        output += '<nav aria-labelledby="';
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_prefix"), env.opts.autoescape);
        output += '-navigation-menu-heading"\n     class="lbcamden-header__content"\n     data-module="super-navigation-mega-menu">\n  ';
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigation") && env.getFilter("length").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigation"))) {
          output += '\n    <h2 id="';
          output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_prefix"), env.opts.autoescape);
          output += '-navigation-menu-heading" class="govuk-visually-hidden">\n      ';
          if (runtime.contextOrFrameLookup(context, frame, "site_name")) {
            output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "site_name"), env.opts.autoescape);
            output += " n";
            ;
          } else {
            output += "N";
            ;
          }
          output += 'avigation menu\n    </h2>\n    <button aria-controls="';
          output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_prefix"), env.opts.autoescape);
          output += '-navigation-menu"\n      aria-expanded="true" aria-label="Show';
          if (runtime.contextOrFrameLookup(context, frame, "site_name")) {
            output += " ";
            output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "site_name"), env.opts.autoescape);
            ;
          }
          output += ' navigation menu"\n      class="lbcamden-header__navigation-top-toggle-button ';
          if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "search") === false) {
            output += "lbcamden-header__navigation-top-toggle-button--no-search";
            ;
          }
          output += '"\n      data-toggle-desktop-group="hidden"\n      data-toggle-mobile-group="top"\n      data-tracking-key="menu"\n      hidden\n      id="';
          output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_prefix"), env.opts.autoescape);
          output += '-navigation-menu-toggle"\n      type="button">\n        <span class="lbcamden-header__navigation-top-toggle-button-inner">\n          Menu\n        </span>\n    </button>\n    <ul id="';
          output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_prefix"), env.opts.autoescape);
          output += '-navigation-menu" class="lbcamden-header__navigation-items">\n      ';
          frame = frame.push();
          var t_3 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigation");
          if (t_3) {
            t_3 = runtime.fromIterator(t_3);
            var t_2 = t_3.length;
            for (var t_1 = 0; t_1 < t_3.length; t_1++) {
              var t_4 = t_3[t_1];
              frame.set("menuItem", t_4);
              frame.set("loop.index", t_1 + 1);
              frame.set("loop.index0", t_1);
              frame.set("loop.revindex", t_2 - t_1);
              frame.set("loop.revindex0", t_2 - t_1 - 1);
              frame.set("loop.first", t_1 === 0);
              frame.set("loop.last", t_1 === t_2 - 1);
              frame.set("loop.length", t_2);
              output += '\n        <li\n          class="lbcamden-header__navigation-item';
              if (runtime.memberLookup(t_4, "subItems")) {
                output += " lbcamden-header__navigation-item--with-children";
                ;
              }
              output += '">\n          <div class="lbcamden-header__navigation-toggle-wrapper govuk-clearfix">\n            <a class="lbcamden-header__navigation-item-link';
              if (runtime.memberLookup(t_4, "classes")) {
                output += " ";
                output += runtime.suppressValue(runtime.memberLookup(t_4, "classes"), env.opts.autoescape);
                ;
              }
              output += '"\n               href="';
              output += runtime.suppressValue(runtime.memberLookup(t_4, "href"), env.opts.autoescape);
              output += '">\n              <span class="lbcamden-header__navigation-item-link-inner">\n                ';
              output += runtime.suppressValue(runtime.memberLookup(t_4, "text"), env.opts.autoescape);
              output += "\n              </span>\n            </a>\n            ";
              if (runtime.memberLookup(t_4, "subItems")) {
                output += '\n            <button aria-controls="';
                output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_prefix"), env.opts.autoescape);
                output += "-navigation-menu__section-";
                output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "loop"), "index"), env.opts.autoescape);
                output += '"\n                    aria-expanded="false"\n                    aria-label="Show ';
                output += runtime.suppressValue(runtime.memberLookup(t_4, "text"), env.opts.autoescape);
                output += ' menu"\n                    class="lbcamden-header__navigation-second-toggle-button"\n                    data-text-for-hide="Hide ';
                output += runtime.suppressValue(runtime.memberLookup(t_4, "text"), env.opts.autoescape);
                output += ' menu"\n                    data-text-for-show="Show ';
                output += runtime.suppressValue(runtime.memberLookup(t_4, "text"), env.opts.autoescape);
                output += ' menu"\n                    data-toggle-desktop-group="top"\n                    data-toggle-mobile-group="second"\n                    hidden="hidden"\n                    type="button">\n              <span class="lbcamden-header__navigation-second-toggle-button-inner">';
                output += runtime.suppressValue(runtime.memberLookup(t_4, "text"), env.opts.autoescape);
                output += "</span></button>\n            ";
                ;
              }
              output += "\n          </div>\n          ";
              if (runtime.memberLookup(t_4, "subItems")) {
                output += '\n          <div hidden class="lbcamden-header__navigation-dropdown-menu"\n               id="';
                output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_prefix"), env.opts.autoescape);
                output += "-navigation-menu__section-";
                output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "loop"), "index"), env.opts.autoescape);
                output += '">\n            <div class="govuk-width-container lbcamden-header__width-container">\n              <div class="govuk-grid-row">\n                ';
                if (runtime.memberLookup(t_4, "description")) {
                  output += '\n                <div class="govuk-grid-column-one-third-from-desktop">\n                  <p class="govuk-body-l lbcamden-header__menu-description">\n                    ';
                  output += runtime.suppressValue(runtime.memberLookup(t_4, "description"), env.opts.autoescape);
                  output += '\n                  </p>\n                </div>\n                <div class="govuk-grid-column-two-thirds-from-desktop">\n                  <ul\n                    class="lbcamden-header__navigation-second-items lbcamden-header__navigation-second-items--topics">\n                ';
                  ;
                } else {
                  output += '\n                <div class="govuk-grid-column-full">\n                  <ul\n                    class="lbcamden-header__navigation-second-items lbcamden-header__navigation-second-items--full lbcamden-header__navigation-second-items--topics">\n                ';
                  ;
                }
                output += "\n                    ";
                frame = frame.push();
                var t_7 = runtime.memberLookup(t_4, "subItems");
                if (t_7) {
                  t_7 = runtime.fromIterator(t_7);
                  var t_6 = t_7.length;
                  for (var t_5 = 0; t_5 < t_7.length; t_5++) {
                    var t_8 = t_7[t_5];
                    frame.set("item", t_8);
                    frame.set("loop.index", t_5 + 1);
                    frame.set("loop.index0", t_5);
                    frame.set("loop.revindex", t_6 - t_5);
                    frame.set("loop.revindex0", t_6 - t_5 - 1);
                    frame.set("loop.first", t_5 === 0);
                    frame.set("loop.last", t_5 === t_6 - 1);
                    frame.set("loop.length", t_6);
                    output += '\n                      <li class="lbcamden-header__dropdown-list-item">\n                        <a class="govuk-link lbcamden-header__navigation-second-item-link"\n                           href="';
                    output += runtime.suppressValue(runtime.memberLookup(t_8, "href"), env.opts.autoescape);
                    output += '">';
                    output += runtime.suppressValue(runtime.memberLookup(t_8, "text"), env.opts.autoescape);
                    output += "</a>\n                        ";
                    if (runtime.memberLookup(t_8, "description")) {
                      output += '\n                          <p class="lbcamden-header__navigation-second-item-description">\n                            ';
                      output += runtime.suppressValue(runtime.memberLookup(t_8, "description"), env.opts.autoescape);
                      output += "</p>\n                        ";
                      ;
                    }
                    output += "\n                      </li>\n                    ";
                    ;
                  }
                }
                frame = frame.pop();
                output += "\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n          ";
                ;
              }
              output += "\n        </li>\n      ";
              ;
            }
          }
          frame = frame.pop();
          output += "\n    </ul>\n  ";
          ;
        }
        output += "\n ";
        var tasks = [];
        tasks.push(
          function(callback) {
            env.getTemplate("./search.njk", false, "src/lbcamden/components/header/includes/navigation.njk", false, function(t_10, t_9) {
              if (t_10) {
                cb(t_10);
                return;
              }
              callback(null, t_9);
            });
          }
        );
        tasks.push(
          function(template, callback) {
            template.render(context.getVariables(), frame, function(t_12, t_11) {
              if (t_12) {
                cb(t_12);
                return;
              }
              callback(null, t_11);
            });
          }
        );
        tasks.push(
          function(result, callback) {
            output += result;
            callback(null);
          }
        );
        env.waterfall(tasks, function() {
          output += "\n</nav>\n";
          if (parentTemplate) {
            parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
          } else {
            cb(null, output);
          }
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/header/includes/search.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../../search/macro.njk", false, "src/lbcamden/components/header/includes/search.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "LBCamdenSearch")) {
              var t_4 = t_12.LBCamdenSearch;
            } else {
              cb(new Error("cannot import 'LBCamdenSearch'"));
              return;
            }
            context.setVariable("LBCamdenSearch", t_4);
            output += "\n\n";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "search") !== false) {
              output += '\n  <button aria-controls="';
              output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_prefix"), env.opts.autoescape);
              output += '-search-menu" aria-expanded="true" aria-label="Hide search menu"\n          class="lbcamden-header__search-toggle-button" data-text-for-hide="Hide search menu"\n          data-text-for-show="Show search menu" data-toggle-mobile-group="top" data-toggle-desktop-group="top"\n          data-tracking-key="search" hidden id="';
              output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_prefix"), env.opts.autoescape);
              output += '-search-menu-toggle" type="button">\n        <span class="govuk-visually-hidden">\n          Search Camden.gov.uk\n        </span>\n\n    ';
              output += "\n    ";
              output += "\n    ";
              output += "\n    ";
              output += "\n    ";
              output += '\n    <span class="lbcamden-header__search-toggle-button-inner">\n      <svg class="lbcamden-header__search-toggle-button-link-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"\n           xmlns="http://www.w3.org/2000/svg">\n        <path fill-rule="evenodd" clip-rule="evenodd"\n              d="M4 7.0944C4 4.69831 5.96416 2.73926 8.4077 2.73926C10.8512 2.73926 12.8154 4.69831 12.8154 7.0944C12.8154 9.49049 10.8512 11.4495 8.4077 11.4495C5.96416 11.4495 4 9.49049 4 7.0944ZM8.4077 0.739258C4.87805 0.739258 2 3.57537 2 7.0944C2 10.6134 4.87805 13.4495 8.4077 13.4495C9.42634 13.4495 10.3907 13.2133 11.2473 12.7927C11.3151 12.8695 11.3923 12.9335 11.4756 12.9845L16.1462 18.4965C16.5032 18.9178 17.1342 18.97 17.5556 18.6129C17.9769 18.2559 18.0291 17.6249 17.6721 17.2035L12.9252 11.6014C14.0918 10.4518 14.8154 8.85894 14.8154 7.0944C14.8154 3.57537 11.9373 0.739258 8.4077 0.739258Z"\n              fill="currentColor"/>\n      </svg>\n    </span>\n\n    <span aria-hidden="true" class="lbcamden-header__navigation-top-toggle-close-icon"\n          focusable="false">\n\n      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path fill-rule="evenodd" clip-rule="evenodd"\n              d="M17.071 4.34285C17.4615 3.95232 17.4615 3.31916 17.071 2.92864C16.6805 2.53811 16.0473 2.53811 15.6568 2.92864L9.99989 8.58554L4.34314 2.92879C3.95261 2.53826 3.31945 2.53826 2.92893 2.92879C2.5384 3.31931 2.5384 3.95248 2.92893 4.343L8.58568 9.99976L2.92888 15.6566C2.53836 16.0471 2.53836 16.6802 2.92888 17.0708C3.3194 17.4613 3.95257 17.4613 4.34309 17.0708L9.99989 11.414L15.6568 17.0709C16.0474 17.4614 16.6805 17.4614 17.0711 17.0709C17.4616 16.6804 17.4616 16.0472 17.0711 15.6567L11.4141 9.99976L17.071 4.34285Z"\n              fill="currentColor"/>\n      </svg>\n\n        </span>\n  </button>\n\n  <div id="';
              output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_prefix"), env.opts.autoescape);
              output += '-search-menu" class="lbcamden-header__search-items">\n    <h3 class="govuk-visually-hidden">\n      Search\n    </h3>\n    <div class="lbcamden-header__search-item">\n      <a class="lbcamden-header__search-item-link" href="/search">\n            <span class="lbcamden-header__search-item-link-text">\n              Search\n            </span>\n        <svg class="lbcamden-header__search-toggle-button-link-icon" width="20" height="20" viewBox="0 0 20 20"\n             fill="none"\n             xmlns="http://www.w3.org/2000/svg">\n          <path fill-rule="evenodd" clip-rule="evenodd"\n                d="M4 7.0944C4 4.69831 5.96416 2.73926 8.4077 2.73926C10.8512 2.73926 12.8154 4.69831 12.8154 7.0944C12.8154 9.49049 10.8512 11.4495 8.4077 11.4495C5.96416 11.4495 4 9.49049 4 7.0944ZM8.4077 0.739258C4.87805 0.739258 2 3.57537 2 7.0944C2 10.6134 4.87805 13.4495 8.4077 13.4495C9.42634 13.4495 10.3907 13.2133 11.2473 12.7927C11.3151 12.8695 11.3923 12.9335 11.4756 12.9845L16.1462 18.4965C16.5032 18.9178 17.1342 18.97 17.5556 18.6129C17.9769 18.2559 18.0291 17.6249 17.6721 17.2035L12.9252 11.6014C14.0918 10.4518 14.8154 8.85894 14.8154 7.0944C14.8154 3.57537 11.9373 0.739258 8.4077 0.739258Z"\n                fill="currentColor"/>\n        </svg>\n\n      </a>\n    </div>\n\n    <div class="govuk-width-container lbcamden-header__search-and-popular" hidden>\n      <div class="govuk-grid-row govuk-!-margin-bottom-6">\n        <div class="govuk-grid-column-full">\n          <h2 class="govuk-heading-m">Search</h2>\n          ';
              output += runtime.suppressValue((lineno = 61, colno = 27, runtime.callWrap(t_4, "LBCamdenSearch", context, [{ "fullWidth": true, "classes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "search"), "classes"), "alt": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "search"), "alt"), "labelText": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "search"), "labelText"), "placeholderText": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "search"), "placeholderText"), "name": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "search"), "name"), "value": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "search"), "value"), "additionalParameters": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "search"), "additionalParameters"), "action": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "search"), "action"), "method": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "search"), "method") }])), env.opts.autoescape);
              output += "\n        </div>\n      </div>\n      ";
              if (env.getFilter("length").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "searchItems"))) {
                output += '\n      <div class="govuk-grid-row">\n        <div class="govuk-grid-column-full">\n          <h2 class="govuk-heading-m">Popular on Camden.gov.uk</h2>\n          <ul class="lbcamden-list lbcamden-list--dash">\n            ';
                frame = frame.push();
                var t_7 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "searchItems");
                if (t_7) {
                  t_7 = runtime.fromIterator(t_7);
                  var t_6 = t_7.length;
                  for (var t_5 = 0; t_5 < t_7.length; t_5++) {
                    var t_8 = t_7[t_5];
                    frame.set("item", t_8);
                    frame.set("loop.index", t_5 + 1);
                    frame.set("loop.index0", t_5);
                    frame.set("loop.revindex", t_6 - t_5);
                    frame.set("loop.revindex0", t_6 - t_5 - 1);
                    frame.set("loop.first", t_5 === 0);
                    frame.set("loop.last", t_5 === t_6 - 1);
                    frame.set("loop.length", t_6);
                    output += '\n              <li class="lbcamden-header__popular-item">\n                <a class="govuk-link lbcamden-header__popular-link"\n                   href="';
                    output += runtime.suppressValue(runtime.memberLookup(t_8, "href"), env.opts.autoescape);
                    output += '">';
                    output += runtime.suppressValue(runtime.memberLookup(t_8, "text"), env.opts.autoescape);
                    output += "</a>\n              </li>\n            ";
                    ;
                  }
                }
                frame = frame.pop();
                output += "\n          </ul>\n        </div>\n      </div>\n      ";
                ;
              }
              output += "\n    </div>\n  </div>\n";
              ;
            }
            output += "\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/header/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/header/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenHeader");
        context.setVariable("LBCamdenHeader", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/header/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../logo/macro.njk", false, "src/lbcamden/components/header/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "LBCamdenLogo")) {
              var t_4 = t_12.LBCamdenLogo;
            } else {
              cb(new Error("cannot import 'LBCamdenLogo'"));
              return;
            }
            context.setVariable("LBCamdenLogo", t_4);
            output += "\n";
            env.getTemplate("./includes/base.njk", false, "src/lbcamden/components/header/template.njk", false, function(t_6, t_5) {
              if (t_6) {
                cb(t_6);
                return;
              }
              t_5.getExported(function(t_7, t_52) {
                if (t_7) {
                  cb(t_7);
                  return;
                }
                if (Object.prototype.hasOwnProperty.call(t_52, "LBCamdenHeaderBase")) {
                  var t_8 = t_52.LBCamdenHeaderBase;
                } else {
                  cb(new Error("cannot import 'LBCamdenHeaderBase'"));
                  return;
                }
                context.setVariable("LBCamdenHeaderBase", t_8);
                output += "\n\n";
                var t_9;
                t_9 = env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "title"), "Camden.gov.uk");
                frame.set("title", t_9, true);
                if (frame.topLevel) {
                  context.setVariable("title", t_9);
                }
                if (frame.topLevel) {
                  context.addExport("title", t_9);
                }
                output += "\n";
                var t_10;
                t_10 = env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id_prefix"), "super");
                frame.set("id_prefix", t_10, true);
                if (frame.topLevel) {
                  context.setVariable("id_prefix", t_10);
                }
                if (frame.topLevel) {
                  context.addExport("id_prefix", t_10);
                }
                output += '\n<header role="banner">\n<div\n  class="lbcamden-header lbcamden-header--estate ';
                output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes") ? runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes") : "", env.opts.autoescape);
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "phaseBanner") && !runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "siteNavigation")) {
                  output += " lbcamden-header--with-phase-banner";
                  ;
                }
                output += '" data-module="lbcamden-header"';
                frame = frame.push();
                var t_13 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes");
                if (t_13) {
                  t_13 = runtime.fromIterator(t_13);
                  var t_11;
                  if (runtime.isArray(t_13)) {
                    var t_122 = t_13.length;
                    for (t_11 = 0; t_11 < t_13.length; t_11++) {
                      var t_14 = t_13[t_11][0];
                      frame.set("[object Object]", t_13[t_11][0]);
                      var t_15 = t_13[t_11][1];
                      frame.set("[object Object]", t_13[t_11][1]);
                      frame.set("loop.index", t_11 + 1);
                      frame.set("loop.index0", t_11);
                      frame.set("loop.revindex", t_122 - t_11);
                      frame.set("loop.revindex0", t_122 - t_11 - 1);
                      frame.set("loop.first", t_11 === 0);
                      frame.set("loop.last", t_11 === t_122 - 1);
                      frame.set("loop.length", t_122);
                      output += " ";
                      output += runtime.suppressValue(t_14, env.opts.autoescape);
                      output += '="';
                      output += runtime.suppressValue(t_15, env.opts.autoescape);
                      output += '"';
                      ;
                    }
                  } else {
                    t_11 = -1;
                    var t_122 = runtime.keys(t_13).length;
                    for (var t_16 in t_13) {
                      t_11++;
                      var t_17 = t_13[t_16];
                      frame.set("attribute", t_16);
                      frame.set("value", t_17);
                      frame.set("loop.index", t_11 + 1);
                      frame.set("loop.index0", t_11);
                      frame.set("loop.revindex", t_122 - t_11);
                      frame.set("loop.revindex0", t_122 - t_11 - 1);
                      frame.set("loop.first", t_11 === 0);
                      frame.set("loop.last", t_11 === t_122 - 1);
                      frame.set("loop.length", t_122);
                      output += " ";
                      output += runtime.suppressValue(t_16, env.opts.autoescape);
                      output += '="';
                      output += runtime.suppressValue(t_17, env.opts.autoescape);
                      output += '"';
                      ;
                    }
                  }
                }
                frame = frame.pop();
                output += '>\n\n  <div class="lbcamden-header__bar ';
                output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "containerClasses"), "govuk-width-container"), env.opts.autoescape);
                output += '">\n    <div class="lbcamden-header__logo">\n      <a href="';
                output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "homepageUrl"), "/"), env.opts.autoescape);
                output += '" class="lbcamden-header__link">\n        ';
                output += runtime.suppressValue((lineno = 13, colno = 23, runtime.callWrap(t_4, "LBCamdenLogo", context, [{}])), env.opts.autoescape);
                output += '\n        <span class="govuk-visually-hidden">';
                output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
                output += "</span>\n      </a>\n    </div>\n    ";
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "navigation") || runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "search") != false) {
                  output += "\n      ";
                  output += runtime.suppressValue((lineno = 19, colno = 27, runtime.callWrap(t_8, "LBCamdenHeaderBase", context, [runtime.contextOrFrameLookup(context, frame, "params"), runtime.contextOrFrameLookup(context, frame, "id_prefix")])), env.opts.autoescape);
                  output += "\n    ";
                  ;
                }
                output += "\n  </div>\n\n  ";
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "emergencyBanner")) {
                  output += '\n    <div class="lbcamden-header__emergency-banner">\n      ';
                  output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "emergencyBanner")), env.opts.autoescape);
                  output += "\n    </div>\n  ";
                  ;
                }
                output += "\n</div>\n\n";
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "siteNavigation")) {
                  output += "\n  ";
                  var t_18;
                  t_18 = function() {
                    var output2 = "";
                    output2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id_prefix"), env.opts.autoescape);
                    output2 += "-site";
                    ;
                    return output2;
                  }();
                  frame.set("site_id_prefix", t_18, true);
                  if (frame.topLevel) {
                    context.setVariable("site_id_prefix", t_18);
                  }
                  if (frame.topLevel) {
                    context.addExport("site_id_prefix", t_18);
                  }
                  output += '\n\n  <div\n    class="lbcamden-header lbcamden-header--site-navigation ';
                  if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "phaseBanner")) {
                    output += "lbcamden-header--with-phase-banner";
                    ;
                  }
                  output += '"\n    data-module="lbcamden-header">\n    <div class="lbcamden-header__bar ';
                  output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "containerClasses"), "govuk-width-container"), env.opts.autoescape);
                  output += '">\n      <div class="lbcamden-header__title">\n        <a href="';
                  output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "siteNavigation"), "homepageUrl"), "/"), env.opts.autoescape);
                  output += '" class="lbcamden-header__link">\n          ';
                  output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "siteNavigation"), "title"), env.opts.autoescape);
                  output += "\n        </a>\n      </div>\n\n      ";
                  output += runtime.suppressValue((lineno = 43, colno = 27, runtime.callWrap(t_8, "LBCamdenHeaderBase", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "siteNavigation"), runtime.contextOrFrameLookup(context, frame, "site_id_prefix"), runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "siteNavigation"), "title")])), env.opts.autoescape);
                  output += "\n    </div>\n  </div>\n";
                  ;
                }
                output += "\n</header>\n";
                if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "phaseBanner")) {
                  output += '\n<div class="govuk-phase-banner">\n  <p class="govuk-phase-banner__content">\n    <strong class="govuk-tag govuk-phase-banner__content__tag">\n      ';
                  output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "phaseBanner"), "tag"), "text"), env.opts.autoescape);
                  output += '\n    </strong>\n    <span class="govuk-phase-banner__text">\n      ';
                  if (runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "phaseBanner"), "html")) {
                    output += "\n      ";
                    output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "phaseBanner"), "html")), env.opts.autoescape);
                    output += "\n      ";
                    ;
                  } else {
                    output += "\n      ";
                    output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "phaseBanner"), "text"), env.opts.autoescape);
                    output += "\n      ";
                    ;
                  }
                  output += "\n    </span>\n  </p>\n</div>\n\n";
                  ;
                }
                output += "\n";
                if (parentTemplate) {
                  parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
                } else {
                  cb(null, output);
                }
              });
            });
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/hero/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/hero/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenHero");
        context.setVariable("LBCamdenHero", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/hero/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../image/macro.njk", false, "src/lbcamden/components/hero/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "LBCamdenImage")) {
              var t_4 = t_12.LBCamdenImage;
            } else {
              cb(new Error("cannot import 'LBCamdenImage'"));
              return;
            }
            context.setVariable("LBCamdenImage", t_4);
            output += '\n\n<div class="lbcamden-hero ';
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
            output += '">\n  ';
            output += runtime.suppressValue((lineno = 3, colno = 18, runtime.callWrap(t_4, "LBCamdenImage", context, [{ "classes": "lbcamden-hero__bg " + runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image"), "classes"), "src": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image"), "src"), "attributes": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image"), "attributes"), "alt": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image"), "alt"), "lazy": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image"), "lazy"), "width": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image"), "width"), "height": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image"), "height"), "widths": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image"), "widths"), "sources": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image"), "sources") }])), env.opts.autoescape);
            output += '\n\n  <div class="govuk-width-container">\n    <div class="lbcamden-hero__content">\n      ';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "welcomeMessage") || env.getFilter("length").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "links"))) {
              output += '\n        <div class="lbcamden-hero__links govuk-body-s">\n          <h1>';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "welcomeMessage"), env.opts.autoescape);
              output += "</h1>\n\n          ";
              if (env.getFilter("length").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "links"))) {
                output += "\n            <h2>";
                output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "linkHeading"), env.opts.autoescape);
                output += '</h2>\n\n            <ul class="lbcamden-list--dash">\n            ';
                frame = frame.push();
                var t_7 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "links");
                if (t_7) {
                  t_7 = runtime.fromIterator(t_7);
                  var t_6 = t_7.length;
                  for (var t_5 = 0; t_5 < t_7.length; t_5++) {
                    var t_8 = t_7[t_5];
                    frame.set("link", t_8);
                    frame.set("loop.index", t_5 + 1);
                    frame.set("loop.index0", t_5);
                    frame.set("loop.revindex", t_6 - t_5);
                    frame.set("loop.revindex0", t_6 - t_5 - 1);
                    frame.set("loop.first", t_5 === 0);
                    frame.set("loop.last", t_5 === t_6 - 1);
                    frame.set("loop.length", t_6);
                    output += '\n              <li><a href="';
                    output += runtime.suppressValue(runtime.memberLookup(t_8, "href"), env.opts.autoescape);
                    output += '">';
                    output += runtime.suppressValue(runtime.memberLookup(t_8, "label"), env.opts.autoescape);
                    output += "</a></li>\n            ";
                    ;
                  }
                }
                frame = frame.pop();
                output += "\n            </ul>\n          ";
                ;
              }
              output += "\n        </div>\n      ";
              ;
            }
            output += "\n\n      ";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "engagement")) {
              output += '\n        <span class="lbcamden-hero__spacer"></span>\n\n        <div class="lbcamden-hero__engagement govuk-body-s">\n          <h2>';
              output += runtime.suppressValue(runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "engagement"), "heading"), env.opts.autoescape);
              output += "</h2>\n          ";
              output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "engagement"), "content")), env.opts.autoescape);
              output += "\n        </div>\n      ";
              ;
            }
            output += "\n    </div>\n  </div>\n</div>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/image/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/image/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenImage");
        context.setVariable("LBCamdenImage", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/image/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        output += '<picture class="lbcamden-image__wrapper">\n  ';
        var t_1;
        t_1 = [{ "mq": "(min-width: 992px)", "w": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "widths"), "wide") }, { "mq": "(min-width: 768px)", "w": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "widths"), "desktop") }, { "mq": "(min-width: 641px)", "w": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "widths"), "tablet") }, { "mq": "(min-width: 576px)", "w": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "widths"), "mobileLarge") }, { "mq": "(min-width: 320px)", "w": runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "widths"), "mobile") }];
        frame.set("sizes", t_1, true);
        if (frame.topLevel) {
          context.setVariable("sizes", t_1);
        }
        if (frame.topLevel) {
          context.addExport("sizes", t_1);
        }
        output += "\n\n  ";
        frame = frame.push();
        var t_4 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "sources");
        if (t_4) {
          t_4 = runtime.fromIterator(t_4);
          var t_3 = t_4.length;
          for (var t_2 = 0; t_2 < t_4.length; t_2++) {
            var t_5 = t_4[t_2];
            frame.set("source", t_5);
            frame.set("loop.index", t_2 + 1);
            frame.set("loop.index0", t_2);
            frame.set("loop.revindex", t_3 - t_2);
            frame.set("loop.revindex0", t_3 - t_2 - 1);
            frame.set("loop.first", t_2 === 0);
            frame.set("loop.last", t_2 === t_3 - 1);
            frame.set("loop.length", t_3);
            output += "\n    ";
            var t_6;
            t_6 = (lineno = 4, colno = 31, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "joiner"), "joiner", context, [", "]));
            frame.set("srcsetComma", t_6, true);
            if (frame.topLevel) {
              context.setVariable("srcsetComma", t_6);
            }
            if (frame.topLevel) {
              context.addExport("srcsetComma", t_6);
            }
            output += "\n    ";
            var t_7;
            t_7 = (lineno = 5, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "joiner"), "joiner", context, [", "]));
            frame.set("sizesComma", t_7, true);
            if (frame.topLevel) {
              context.setVariable("sizesComma", t_7);
            }
            if (frame.topLevel) {
              context.addExport("sizesComma", t_7);
            }
            output += '\n\n    <source\n      type="';
            output += runtime.suppressValue(runtime.memberLookup(t_5, "type"), env.opts.autoescape);
            output += '"\n      srcset="';
            frame = frame.push();
            var t_10 = runtime.memberLookup(t_5, "sources");
            if (t_10) {
              t_10 = runtime.fromIterator(t_10);
              var t_9 = t_10.length;
              for (var t_8 = 0; t_8 < t_10.length; t_8++) {
                var t_11 = t_10[t_8];
                frame.set("item", t_11);
                frame.set("loop.index", t_8 + 1);
                frame.set("loop.index0", t_8);
                frame.set("loop.revindex", t_9 - t_8);
                frame.set("loop.revindex0", t_9 - t_8 - 1);
                frame.set("loop.first", t_8 === 0);
                frame.set("loop.last", t_8 === t_9 - 1);
                frame.set("loop.length", t_9);
                output += runtime.suppressValue((lineno = 9, colno = 60, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "srcsetComma"), "srcsetComma", context, [])), env.opts.autoescape);
                output += runtime.suppressValue(runtime.memberLookup(t_11, "src"), env.opts.autoescape);
                output += " ";
                if (runtime.memberLookup(t_11, "width")) {
                  output += runtime.suppressValue(runtime.memberLookup(t_11, "width"), env.opts.autoescape);
                  output += "w";
                  ;
                }
                ;
              }
            }
            frame = frame.pop();
            output += '"\n      sizes="';
            frame = frame.push();
            var t_14 = env.getFilter("selectattr").call(context, runtime.contextOrFrameLookup(context, frame, "sizes"), "w");
            if (t_14) {
              t_14 = runtime.fromIterator(t_14);
              var t_13 = t_14.length;
              for (var t_12 = 0; t_12 < t_14.length; t_12++) {
                var t_15 = t_14[t_12];
                frame.set("size", t_15);
                frame.set("loop.index", t_12 + 1);
                frame.set("loop.index0", t_12);
                frame.set("loop.revindex", t_13 - t_12);
                frame.set("loop.revindex0", t_13 - t_12 - 1);
                frame.set("loop.first", t_12 === 0);
                frame.set("loop.last", t_12 === t_13 - 1);
                frame.set("loop.length", t_13);
                output += runtime.suppressValue((lineno = 10, colno = 67, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "sizesComma"), "sizesComma", context, [])), env.opts.autoescape);
                if (!runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "loop"), "last")) {
                  output += runtime.suppressValue(runtime.memberLookup(t_15, "mq"), env.opts.autoescape);
                  output += " ";
                  ;
                }
                output += runtime.suppressValue(runtime.memberLookup(t_15, "w"), env.opts.autoescape);
                ;
              }
            }
            frame = frame.pop();
            output += '"\n    />\n  ';
            ;
          }
        }
        frame = frame.pop();
        output += "\n\n  ";
        var t_16;
        t_16 = runtime.memberLookup(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes"), "style");
        frame.set("style", t_16, true);
        if (frame.topLevel) {
          context.setVariable("style", t_16);
        }
        if (frame.topLevel) {
          context.addExport("style", t_16);
        }
        output += '\n\n  <img\n    class="lbcamden-image ';
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
        output += '"\n    src="';
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "src"), env.opts.autoescape);
        output += '"\n    alt="';
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "alt"), env.opts.autoescape);
        output += '"\n    ';
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "width")) {
          output += 'width="';
          output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "width"), env.opts.autoescape);
          output += '"';
          ;
        }
        output += "\n    ";
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "height")) {
          output += 'height="';
          output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "height"), env.opts.autoescape);
          output += '"';
          ;
        }
        output += "\n    ";
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "lazy")) {
          output += 'loading="lazy"';
          ;
        }
        frame = frame.push();
        var t_19 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attributes");
        if (t_19) {
          t_19 = runtime.fromIterator(t_19);
          var t_17;
          if (runtime.isArray(t_19)) {
            var t_18 = t_19.length;
            for (t_17 = 0; t_17 < t_19.length; t_17++) {
              var t_20 = t_19[t_17][0];
              frame.set("[object Object]", t_19[t_17][0]);
              var t_21 = t_19[t_17][1];
              frame.set("[object Object]", t_19[t_17][1]);
              frame.set("loop.index", t_17 + 1);
              frame.set("loop.index0", t_17);
              frame.set("loop.revindex", t_18 - t_17);
              frame.set("loop.revindex0", t_18 - t_17 - 1);
              frame.set("loop.first", t_17 === 0);
              frame.set("loop.last", t_17 === t_18 - 1);
              frame.set("loop.length", t_18);
              if (t_20 != "style") {
                output += " ";
                output += runtime.suppressValue(t_20, env.opts.autoescape);
                output += '="';
                output += runtime.suppressValue(t_21, env.opts.autoescape);
                output += '"';
                ;
              }
              ;
            }
          } else {
            t_17 = -1;
            var t_18 = runtime.keys(t_19).length;
            for (var t_22 in t_19) {
              t_17++;
              var t_23 = t_19[t_22];
              frame.set("attribute", t_22);
              frame.set("value", t_23);
              frame.set("loop.index", t_17 + 1);
              frame.set("loop.index0", t_17);
              frame.set("loop.revindex", t_18 - t_17);
              frame.set("loop.revindex0", t_18 - t_17 - 1);
              frame.set("loop.first", t_17 === 0);
              frame.set("loop.last", t_17 === t_18 - 1);
              frame.set("loop.length", t_18);
              if (t_22 != "style") {
                output += " ";
                output += runtime.suppressValue(t_22, env.opts.autoescape);
                output += '="';
                output += runtime.suppressValue(t_23, env.opts.autoescape);
                output += '"';
                ;
              }
              ;
            }
          }
        }
        frame = frame.pop();
        output += '\n    style="';
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "style"), env.opts.autoescape);
        output += '"\n  />\n</picture>\n';
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/image-component/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/image-component/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenImageComponent");
        context.setVariable("LBCamdenImageComponent", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/image-component/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../image/macro.njk", false, "src/lbcamden/components/image-component/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "LBCamdenImage")) {
              var t_4 = t_12.LBCamdenImage;
            } else {
              cb(new Error("cannot import 'LBCamdenImage'"));
              return;
            }
            context.setVariable("LBCamdenImage", t_4);
            output += "\n";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "caption") == "\n") {
              output += '\n    <div class="lb-image-component">';
              output += runtime.suppressValue((lineno = 2, colno = 52, runtime.callWrap(t_4, "LBCamdenImage", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image")])), env.opts.autoescape);
              output += "</div>\n";
              ;
            } else {
              output += '\n    <figure class="lbcamden-image-component">\n        ';
              output += runtime.suppressValue((lineno = 5, colno = 24, runtime.callWrap(t_4, "LBCamdenImage", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image")])), env.opts.autoescape);
              output += '\n        <figcaption class="lbcamden-image-component__caption">';
              output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "caption")), env.opts.autoescape);
              output += "</figcaption>\n    </figure>\n";
              ;
            }
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/image-gallery/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/image-gallery/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenImageGallery");
        context.setVariable("LBCamdenImageGallery", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/image-gallery/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../card/macro.njk", false, "src/lbcamden/components/image-gallery/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "LBCamdenCard")) {
              var t_4 = t_12.LBCamdenCard;
            } else {
              cb(new Error("cannot import 'LBCamdenCard'"));
              return;
            }
            context.setVariable("LBCamdenCard", t_4);
            output += '\n<ul class="lbcamden-card-grid lbcamden-image-gallery">   \n    ';
            frame = frame.push();
            var t_7 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "items");
            if (t_7) {
              t_7 = runtime.fromIterator(t_7);
              var t_6 = t_7.length;
              for (var t_5 = 0; t_5 < t_7.length; t_5++) {
                var t_8 = t_7[t_5];
                frame.set("item", t_8);
                frame.set("loop.index", t_5 + 1);
                frame.set("loop.index0", t_5);
                frame.set("loop.revindex", t_6 - t_5);
                frame.set("loop.revindex0", t_6 - t_5 - 1);
                frame.set("loop.first", t_5 === 0);
                frame.set("loop.last", t_5 === t_6 - 1);
                frame.set("loop.length", t_6);
                output += "\n        ";
                output += runtime.suppressValue((lineno = 3, colno = 23, runtime.callWrap(t_4, "LBCamdenCard", context, [{ "element": "li", "image": runtime.memberLookup(t_8, "image"), "classes": "lbcamden-card--naked", "content": { "text": runtime.memberLookup(t_8, "caption") } }])), env.opts.autoescape);
                output += "\n    ";
                ;
              }
            }
            frame = frame.pop();
            output += "\n</ul>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/info-callout/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/info-callout/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenInfoCallout");
        context.setVariable("LBCamdenInfoCallout", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/info-callout/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../button/macro.njk", false, "src/lbcamden/components/info-callout/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "LBCamdenButton")) {
              var t_4 = t_12.LBCamdenButton;
            } else {
              cb(new Error("cannot import 'LBCamdenButton'"));
              return;
            }
            context.setVariable("LBCamdenButton", t_4);
            output += '\n\n<div class="lbcamden-info-callout">\n    ';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading")) {
              output += '<h2 class="lbcamden-info-callout__heading">';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading"), env.opts.autoescape);
              output += "</h2>";
              ;
            }
            output += "\n    ";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "subheading")) {
              output += '<p class="lbcamden-info-callout__subheading">';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "subheading"), env.opts.autoescape);
              output += "</p>";
              ;
            }
            output += "\n    ";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading")) {
              output += '<div class="lbcamden-info-callout__content">';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "content"), env.opts.autoescape);
              output += "</div>";
              ;
            }
            output += "\n    ";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "linkHref") && runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "linkLabel") && !(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "buttonStyle") == "ACTION_LINK")) {
              output += "\n            ";
              output += runtime.suppressValue((lineno = 7, colno = 29, runtime.callWrap(t_4, "LBCamdenButton", context, [{ "text": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "linkLabel"), "href": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "linkHref"), "isStartButton": runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "buttonStyle") == "START_NOW" }])), env.opts.autoescape);
              output += "\n    ";
              ;
            }
            output += "\n    ";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "linkHref") && runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "linkLabel") && runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "buttonStyle") == "ACTION_LINK") {
              output += '\n        <a href="';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "linkHref"), env.opts.autoescape);
              output += '"\n            class="lbcamden-link--action lbcamden-info-callout__link">';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "linkLabel"), env.opts.autoescape);
              output += "</a>\n    ";
              ;
            }
            output += "\n</div>\n\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/lead-image/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/lead-image/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenLeadImage");
        context.setVariable("LBCamdenLeadImage", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/lead-image/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../image/macro.njk", false, "src/lbcamden/components/lead-image/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "LBCamdenImage")) {
              var t_4 = t_12.LBCamdenImage;
            } else {
              cb(new Error("cannot import 'LBCamdenImage'"));
              return;
            }
            context.setVariable("LBCamdenImage", t_4);
            output += '\n\n<div class="lbcamden-lead-image">\n    ';
            output += runtime.suppressValue((lineno = 3, colno = 20, runtime.callWrap(t_4, "LBCamdenImage", context, [runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "image")])), env.opts.autoescape);
            output += "\n</div>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/link-list-gallery/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/link-list-gallery/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenLinkListGallery");
        context.setVariable("LBCamdenLinkListGallery", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/link-list-gallery/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("../card/macro.njk", false, "src/lbcamden/components/link-list-gallery/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "LBCamdenCard")) {
              var t_4 = t_12.LBCamdenCard;
            } else {
              cb(new Error("cannot import 'LBCamdenCard'"));
              return;
            }
            context.setVariable("LBCamdenCard", t_4);
            output += '\n\n<div class="lbcamden-link-list-gallery ';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "surround")) {
              output += "lbcamden-surround ";
              ;
            }
            output += " ";
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
            output += '">\n  ';
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading")) {
              output += "\n    <h2>";
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading"), env.opts.autoescape);
              output += "</h2>\n  ";
              ;
            }
            output += "\n\n  ";
            if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "shortDescription")) {
              output += '\n    <p class="lbcamden-link-list-gallery__description">\n      ';
              output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "shortDescription"), env.opts.autoescape);
              output += "\n    </p>\n  ";
              ;
            }
            output += '\n\n  <ul class="lbcamden-card-grid">\n    ';
            frame = frame.push();
            var t_7 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "items");
            if (t_7) {
              t_7 = runtime.fromIterator(t_7);
              var t_6 = t_7.length;
              for (var t_5 = 0; t_5 < t_7.length; t_5++) {
                var t_8 = t_7[t_5];
                frame.set("item", t_8);
                frame.set("loop.index", t_5 + 1);
                frame.set("loop.index0", t_5);
                frame.set("loop.revindex", t_6 - t_5);
                frame.set("loop.revindex0", t_6 - t_5 - 1);
                frame.set("loop.first", t_5 === 0);
                frame.set("loop.last", t_5 === t_6 - 1);
                frame.set("loop.length", t_6);
                output += "\n      ";
                var t_9;
                t_9 = function() {
                  var output2 = "";
                  output2 += "\n        ";
                  if (runtime.memberLookup(t_8, "links")) {
                    output2 += '\n          <ul class="lbcamden-list--dash">\n            ';
                    frame = frame.push();
                    var t_122 = runtime.memberLookup(t_8, "links");
                    if (t_122) {
                      t_122 = runtime.fromIterator(t_122);
                      var t_11 = t_122.length;
                      for (var t_10 = 0; t_10 < t_122.length; t_10++) {
                        var t_13 = t_122[t_10];
                        frame.set("link", t_13);
                        frame.set("loop.index", t_10 + 1);
                        frame.set("loop.index0", t_10);
                        frame.set("loop.revindex", t_11 - t_10);
                        frame.set("loop.revindex0", t_11 - t_10 - 1);
                        frame.set("loop.first", t_10 === 0);
                        frame.set("loop.last", t_10 === t_11 - 1);
                        frame.set("loop.length", t_11);
                        output2 += '\n              <li><a href="';
                        output2 += runtime.suppressValue(runtime.memberLookup(t_13, "href"), env.opts.autoescape);
                        output2 += '">';
                        output2 += runtime.suppressValue(runtime.memberLookup(t_13, "title"), env.opts.autoescape);
                        output2 += "</a></li>\n            ";
                        ;
                      }
                    }
                    frame = frame.pop();
                    output2 += "\n          </ul>\n          ";
                    if (runtime.memberLookup(t_8, "viewAllHref")) {
                      output2 += '\n            <a href="';
                      output2 += runtime.suppressValue(runtime.memberLookup(t_8, "viewAllHref"), env.opts.autoescape);
                      output2 += '" class="lbcamden-link--action">View all</a>\n          ';
                      ;
                    }
                    output2 += "\n        ";
                    ;
                  }
                  output2 += "\n      ";
                  ;
                  return output2;
                }();
                frame.set("cardHtml", t_9, true);
                if (frame.topLevel) {
                  context.setVariable("cardHtml", t_9);
                }
                if (frame.topLevel) {
                  context.addExport("cardHtml", t_9);
                }
                output += "\n      ";
                output += runtime.suppressValue((lineno = 27, colno = 21, runtime.callWrap(t_4, "LBCamdenCard", context, [{ "element": "li", "heading": { "title": runtime.memberLookup(t_8, "title"), "headingLevel": 3 }, "content": { "html": runtime.contextOrFrameLookup(context, frame, "cardHtml") } }])), env.opts.autoescape);
                output += "\n    ";
                ;
              }
            }
            frame = frame.pop();
            output += "\n  </ul>\n</div>\n";
            if (parentTemplate) {
              parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
            } else {
              cb(null, output);
            }
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/logo/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/logo/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenLogo");
        context.setVariable("LBCamdenLogo", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/logo/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var t_1;
        t_1 = function() {
          var output2 = "";
          output2 += '\n  <defs>\n    <linearGradient id="prideGradient" cx="50%" cy="50%" fx="20%" fy="20%" spreadMethod="pad">\n      <stop stop-color="#FE0000" offset="0%"/>\n      <stop stop-color="#FD8C00" offset="16.6%"/>\n      <stop stop-color="#FFE500" offset="33.2%"/>\n      ';
          output2 += "\n    </linearGradient>\n  </defs>\n";
          ;
          return output2;
        }();
        frame.set("prideGradient", t_1, true);
        if (frame.topLevel) {
          context.setVariable("prideGradient", t_1);
        }
        if (frame.topLevel) {
          context.addExport("prideGradient", t_1);
        }
        output += "\n\n";
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "icon")) {
          output += '\n  <svg xmlns="http://www.w3.org/2000/svg"\n       class="lbcamden-logo ';
          if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
            ;
          }
          output += '"\n       viewBox="0 0 60 60"\n       preserveAspectRatio="xMinYMid"\n       aria-hidden="true"\n       focusable="false">\n    ';
          if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "pride")) {
            output += "\n      ";
            output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "prideGradient")), env.opts.autoescape);
            output += "\n    ";
            ;
          }
          output += '\n    <path\n      d="M44.4,18.86s1.09-1.3-.88-2.34a14.746,14.746,0,0,0-3.46-.2c-1.15.2-1.23-1,.07-1H52.08s-.63-7.77-7.13-8c-7.4-.26-13.65-.07-13.65-.07v8.12l7.2,3.45Zm1.18-2.3s-1.08,1.3.88,2.34a14.777,14.777,0,0,0,3.47.2c1.16-.2,1.22,1-.07,1h-12s.62,7.77,7.13,8c7.4.26,13.65.07,13.65.07V20l-7.2-3.45ZM40.06,43.33a14.375,14.375,0,0,0,3.46-.19c2-1,.88-2.34.88-2.34H38.5l-7.2,3.45v8.12s6.25.19,13.65-.07c6.5-.23,7.13-8,7.13-8H40.13C38.83,44.31,38.91,43.14,40.06,43.33ZM45,31.6c-6.51.23-7.13,8-7.13,8h12c1.29,0,1.23,1.17.07,1a14.777,14.777,0,0,0-3.47.2c-2,1-.88,2.34-.88,2.34H51.5l7.2-3.45V31.53S52.44,31.34,45,31.6ZM15.43,7.36c-6.51.22-7.14,8-7.14,8h12c1.28,0,1.22,1.17.07,1a14.777,14.777,0,0,0-3.47.2c-2,1-.88,2.34-.88,2.34h5.9l7.2-3.45V7.29S22.83,7.1,15.43,7.36Zm-.1,20.7c6.51-.22,7.13-8,7.13-8h-12c-1.29,0-1.22-1.17-.06-1a14.746,14.746,0,0,0,3.46-.2c2-1,.88-2.34.88-2.34H8.88L1.69,20v8.12S7.93,28.32,15.33,28.06ZM16,40.8s-1.09,1.3.88,2.34a14.409,14.409,0,0,0,3.47.19c1.15-.19,1.21,1-.07,1h-12s.63,7.76,7.14,8c7.4.26,13.64.07,13.64.07V44.25l-7.2-3.45Zm-1.21,2.3s1.09-1.3-.88-2.34a14.746,14.746,0,0,0-3.46-.2c-1.16.2-1.23-1,.06-1h12s-.62-7.76-7.13-8c-7.4-.26-13.64-.07-13.64-.07v8.12L8.88,43.1Z"\n      fill="';
          if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "pride")) {
            output += "url(#prideGradient)";
            ;
          } else {
            output += "#";
            output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "fillColour"), "000000"), env.opts.autoescape);
            ;
          }
          output += '"/>\n  </svg>\n';
          ;
        } else {
          output += '\n  <svg class="lbcamden-logo ';
          if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
            ;
          }
          output += '"\n       viewBox="0 0 150 31"\n       fill="none"\n       xmlns="http://www.w3.org/2000/svg"\n       preserveAspectRatio="xMinYMid"\n       aria-hidden="true"\n       focusable="false">\n    ';
          if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "pride")) {
            output += "\n      ";
            output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "prideGradient")), env.opts.autoescape);
            output += "\n    ";
            ;
          }
          output += '\n    <path\n      d="M150 24.3306V15.1082C150 12.0881 147.945 10.524 144.701 10.524C143.787 10.5055 142.883 10.7146 142.07 11.1326C141.257 11.5506 140.561 12.1643 140.044 12.9184L139.986 12.8643V10.8909H136.858V24.3306H140.156V16.4058C140.131 15.4913 140.47 14.6043 141.098 13.9396C141.727 13.2749 142.594 12.8867 143.508 12.8605H143.778C145.709 12.8605 146.648 13.7719 146.702 15.8806V24.3306H150ZM134.834 18.3831C135.386 14.3473 132.49 10.524 127.77 10.524C123.31 10.524 120.533 13.8028 120.533 17.63C120.533 21.7662 123.167 24.7091 127.871 24.7091C131.138 24.7091 133.923 23.0677 134.641 20.1288H131.516C130.941 21.6079 129.779 22.3649 127.871 22.3649C125.121 22.3649 123.843 20.4918 123.843 18.3831H134.834ZM131.532 16.429H123.831C123.924 14.4246 125.484 12.8643 127.77 12.8643C128.739 12.8475 129.676 13.2115 130.379 13.8781C131.083 14.5446 131.497 15.4606 131.532 16.429ZM115.427 24.3306H118.563V5.76213H115.269V12.6326H115.211C114.195 11.1496 112.122 10.524 110.229 10.524C106.962 10.524 103.753 12.6558 103.753 17.5219C103.753 21.5577 106.035 24.7091 110.751 24.7091C112.635 24.7091 114.512 24.0564 115.385 22.5232H115.447V24.3306H115.427ZM115.373 17.5914C115.373 19.9318 114.13 22.3533 111.179 22.3533C108.317 22.3533 107.043 20.0631 107.043 17.7459C107.043 15.3283 108.14 12.8528 111.237 12.8528C113.786 12.8528 115.373 14.6254 115.373 17.5914ZM98.6547 24.3306H101.957V15.0618C101.957 11.7791 100.103 10.5317 96.9361 10.5317C96.0328 10.4937 95.1338 10.6752 94.3159 11.0606C93.4981 11.446 92.7858 12.0238 92.24 12.7446C91.5757 11.1998 89.8687 10.5085 88.042 10.5085C85.6707 10.5085 84.4271 11.42 83.4385 12.7446H83.3535V10.8909H80.233V24.3306H83.535V16.3556C83.535 14.1156 85.0798 12.8798 86.8023 12.8798C88.7989 12.8798 89.4361 13.8723 89.4361 15.7145V24.3576H92.7382V16.4599C92.7382 14.1929 93.6921 12.8643 95.9204 12.8643C98.4964 12.8643 98.647 14.3473 98.647 16.483V24.3306H98.6547ZM75.8921 24.7168C76.5992 24.6828 77.3001 24.5688 77.9815 24.377V22.3146C77.7128 22.3525 77.4417 22.3693 77.1704 22.3649C76.5641 22.3649 76.398 22.0829 76.398 21.353V14.4246C76.398 11.5899 73.3278 10.524 70.4004 10.524C67.1022 10.524 63.835 11.5358 63.5994 15.0039H66.9014C67.0443 13.5441 68.3496 12.8643 70.1995 12.8643C71.5319 12.8643 73.2891 13.1501 73.2891 14.6872C73.2891 16.429 71.1766 16.1972 68.8015 16.5873C66.0247 16.877 63.0433 17.4215 63.0433 20.7776C63.0433 23.4076 65.4725 24.7091 68.1643 24.7091C69.9292 24.7091 72.0263 24.2109 73.3471 23.0677C73.6058 24.292 74.5636 24.7091 75.8921 24.7091V24.7168ZM73.0844 19.8121C73.0844 21.689 70.8329 22.3649 69.3847 22.3649C68.2261 22.3649 66.3414 21.9787 66.3414 20.6501C66.3414 19.1053 67.6159 18.6149 69.0448 18.4063C70.4737 18.1978 72.0842 18.2016 73.096 17.603V19.8121H73.0844ZM47.155 15.2974C47.155 11.8216 48.9585 8.39987 53.2724 8.39987C56.2037 8.39987 57.6982 9.9215 58.293 11.9993H61.819C61.4058 8.11022 57.8141 5.84323 53.2956 5.82006C47.2631 5.82006 43.6406 10.13 43.6406 15.3013C43.6406 20.4725 47.2515 24.7786 53.2956 24.7786C58.1733 24.7786 61.5873 21.7856 61.8653 17.4408H58.4243C58.1269 20.0824 56.4083 22.1833 53.2956 22.1833C48.9817 22.1833 47.1782 18.7616 47.1782 15.2897L47.155 15.2974ZM33.2557 23.9444L38.06 21.6272V16.2204C38.06 16.2204 33.889 16.0891 28.9495 16.2629C24.6048 16.4174 24.1916 21.6002 24.1916 21.6002H32.1666C33.0278 21.6002 32.9853 22.3726 32.2129 22.2451C31.4381 22.198 30.6603 22.242 29.8957 22.3764C28.5826 23.0716 29.3087 23.9212 29.3087 23.9212L33.2557 23.9444ZM38.06 13.9418V8.53504L33.2557 6.21784H29.301C29.301 6.21784 28.5749 7.08679 29.888 7.76264C30.6522 7.90023 31.4302 7.94561 32.2052 7.89781C32.9776 7.76264 33.0201 8.54663 32.1589 8.54663H24.18C24.18 8.54663 24.5932 13.7294 28.938 13.88C33.8774 14.0538 38.0484 13.9225 38.0484 13.9225L38.06 13.9418ZM25.6591 5.40682H33.6341C33.6341 5.40682 33.2132 0.239469 28.8762 0.0888508C23.9444 -0.0810771 19.7657 0.0463688 19.7657 0.0463688V5.45317L24.57 7.77037H28.5131C28.5131 7.77037 29.2392 6.90528 27.9222 6.20626C27.1577 6.07132 26.3798 6.02853 25.605 6.07881C24.8326 6.20626 24.7863 5.42613 25.6514 5.42613L25.6591 5.40682ZM18.2711 30.1429V24.7361L13.4668 22.4189H9.53141C9.53141 22.4189 8.80536 23.2879 10.1184 23.983C10.883 24.1181 11.6609 24.1609 12.4356 24.1105C13.208 23.983 13.2467 24.7632 12.3893 24.7632H4.4104C4.4104 24.7632 4.8275 29.9421 9.17225 30.0966C14.1117 30.2704 18.2788 30.1429 18.2788 30.1429H18.2711ZM13.4745 7.77423L18.2788 5.45703V0.0502308C18.2788 0.0502308 14.1117 -0.0772151 9.17225 0.0927128C4.8275 0.243331 4.4104 5.42613 4.4104 5.42613H12.3893C13.2467 5.42613 13.2042 6.19853 12.4356 6.07881C11.6609 6.02842 10.883 6.07121 10.1184 6.20626C8.80536 6.90528 9.53141 7.77037 9.53141 7.77037L13.4745 7.77423ZM4.80433 6.22943L0 8.54663V13.9534C0 13.9534 4.17096 14.0847 9.10659 13.9109C13.4513 13.7603 13.8684 8.57752 13.8684 8.57752H5.89341C5.03218 8.57752 5.07467 7.80512 5.84706 7.92871C6.62209 7.97651 7.40005 7.93113 8.16426 7.79354C9.4812 7.10224 8.75515 6.24874 8.75515 6.24874L4.80433 6.22943ZM0 16.2204V21.6272L4.80433 23.9444H8.74743C8.74743 23.9444 9.47348 23.0793 8.15654 22.3996C7.39195 22.2652 6.61422 22.2211 5.83934 22.2683C5.06694 22.3996 5.0206 21.6272 5.88568 21.6272H13.8607C13.8607 21.6272 13.4436 16.4483 9.09887 16.2938C4.16323 16.12 0 16.2513 0 16.2513V16.2204ZM24.57 22.4305L19.7657 24.7477V30.1545C19.7657 30.1545 23.9444 30.282 28.8684 30.1236C33.2132 29.9537 33.6264 24.7747 33.6264 24.7747H25.6591C24.794 24.7747 24.8442 24.0023 25.6128 24.1221C26.3875 24.1723 27.1654 24.1296 27.93 23.9946C29.2469 23.2995 28.5209 22.4305 28.5209 22.4305H24.57Z"\n      fill="';
          if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "pride")) {
            output += "url(#prideGradient)";
            ;
          } else {
            output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "fillColour"), "currentColor"), env.opts.autoescape);
            ;
          }
          output += '"/>\n  </svg>\n';
          ;
        }
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/more-in/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/more-in/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenMoreIn");
        context.setVariable("LBCamdenMoreIn", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/more-in/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        output += '<section class="lbcamden-row lbcamden-row--related">\n  <div class="govuk-width-container">\n    <h2 class="govuk-heading-l">';
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading"), env.opts.autoescape);
        output += '</h2>\n    <ul class="lbcamden-list--dash">\n      ';
        frame = frame.push();
        var t_3 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "relatedContent");
        if (t_3) {
          t_3 = runtime.fromIterator(t_3);
          var t_2 = t_3.length;
          for (var t_1 = 0; t_1 < t_3.length; t_1++) {
            var t_4 = t_3[t_1];
            frame.set("item", t_4);
            frame.set("loop.index", t_1 + 1);
            frame.set("loop.index0", t_1);
            frame.set("loop.revindex", t_2 - t_1);
            frame.set("loop.revindex0", t_2 - t_1 - 1);
            frame.set("loop.first", t_1 === 0);
            frame.set("loop.last", t_1 === t_2 - 1);
            frame.set("loop.length", t_2);
            output += '\n        <li><a href="';
            output += runtime.suppressValue(runtime.memberLookup(t_4, "href"), env.opts.autoescape);
            output += '">';
            output += runtime.suppressValue(runtime.memberLookup(t_4, "text"), env.opts.autoescape);
            output += "</a></li>\n      ";
            ;
          }
        }
        frame = frame.pop();
        output += "\n    </ul>\n  </div>\n</section>\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/promo-gallery/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/promo-gallery/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenPromoGallery");
        context.setVariable("LBCamdenPromoGallery", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/promo-gallery/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        output += '<div class="lbcamden-promo-gallery ';
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "surround")) {
          output += "lbcamden-surround ";
          ;
        }
        output += " ";
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
        output += '">\n    ';
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading")) {
          output += "\n      <h2>";
          output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading"), env.opts.autoescape);
          output += "</h2>\n    ";
          ;
        }
        output += "\n\n    ";
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "shortDescription")) {
          output += '\n      <p class="lbcamden-promo-gallery__description">\n        ';
          output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "shortDescription"), env.opts.autoescape);
          output += "\n      </p>\n    ";
          ;
        }
        output += '\n\n    <ul class="lbcamden-card-grid lbcamden-card-grid--popular">\n        ';
        frame = frame.push();
        var t_3 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "items");
        if (t_3) {
          t_3 = runtime.fromIterator(t_3);
          var t_2 = t_3.length;
          for (var t_1 = 0; t_1 < t_3.length; t_1++) {
            var t_4 = t_3[t_1];
            frame.set("item", t_4);
            frame.set("loop.index", t_1 + 1);
            frame.set("loop.index0", t_1);
            frame.set("loop.revindex", t_2 - t_1);
            frame.set("loop.revindex0", t_2 - t_1 - 1);
            frame.set("loop.first", t_1 === 0);
            frame.set("loop.last", t_1 === t_2 - 1);
            frame.set("loop.length", t_2);
            output += '\n            <li class="lbcamden-card-grid--link-wrapper">\n                <a class="lbcamden-card--clickable lbcamden-link--promo lbcamden-link--promo-alt" href="';
            output += runtime.suppressValue(runtime.memberLookup(t_4, "href"), env.opts.autoescape);
            output += '">';
            output += runtime.suppressValue(runtime.memberLookup(t_4, "title"), env.opts.autoescape);
            output += "</a>\n            </li>\n        ";
            ;
          }
        }
        frame = frame.pop();
        output += "\n    </ul>\n\n    ";
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "showAllHref")) {
          output += '\n      <a href="';
          output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "showAllHref"), env.opts.autoescape);
          output += '" class="lbcamden-link--promo lbcamden-link--promo--large lbcamden-promo-gallery__all">\n        ';
          output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "showAllLabel"), "Show all"), env.opts.autoescape);
          output += "\n      </a>\n    ";
          ;
        }
        output += "\n</div>\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/quotation/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/quotation/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenQuotation");
        context.setVariable("LBCamdenQuotation", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/quotation/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        output += '<div class="lbcamden-quotation ';
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "colour"), env.opts.autoescape);
        output += '">\n    <svg viewBox="0 0 80 58"\n         width="80"\n         height="58"\n         xmlns="http://www.w3.org/2000/svg">\n        <path class="lbcamden-quotation-mark" d="M61.6277 58C71.716 58 79.9065 49.7285 79.9065 39.7629C79.9065 30.7938 73.414 23.3196 64.9239 21.8247C68.1202 15.945 72.9146 9.86595 79.4071 3.48794C80.0064 2.89 80.1063 2.09275 79.9065 1.29549C79.6069 0.5979 78.9077 0.0996207 78.0087 0.0996206C58.5313 0.0996189 43.4488 21.4261 43.4488 39.7629C43.5487 44.8453 45.5464 49.3299 48.8426 52.6186C52.0389 55.9072 56.5336 58 61.6277 58Z" />\n        <path class="lbcamden-quotation-mark" d="M18.2787 57.9004C28.3669 57.9004 36.5574 49.7286 36.5574 39.6633C36.5574 30.6942 29.9651 23.22 21.4749 21.7251C24.6712 15.8454 29.4657 9.76634 35.9581 3.38833C36.5574 2.79039 36.7572 1.99314 36.4576 1.19588C36.1579 0.498291 35.4587 1.1345e-05 34.6596 1.12753e-05C14.9825 -0.0996456 -0.000111227 21.2268 -0.000112843 39.6633C-0.000113716 49.6289 8.19038 57.9004 18.2787 57.9004Z" />\n    </svg>\n    <div class="lbcamden-quotation-text">\n        <p>';
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "text"), env.opts.autoescape);
        output += '</p>\n        <p class="lbcamden-quotation-attribution">';
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "attribution"), env.opts.autoescape);
        output += "</p>\n    </div>\n</div>";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/related-content-card/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/related-content-card/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenRelatedContentCard");
        context.setVariable("LBCamdenRelatedContentCard", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/related-content-card/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        output += '<aside class="lbcamden-related-content-card lbcamden-card lbcamden-card--alt-1" aria-labelledby="related-content-heading">\n  <h2 id="related-content-heading">\n    ';
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading"), env.opts.autoescape);
        output += '\n  </h2>\n  <div class="lbcamden-card__content">\n    ';
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "shortDescription")) {
          output += "\n    <p>";
          output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "shortDescription"), env.opts.autoescape);
          output += "</p>\n    ";
          ;
        }
        output += '\n    <ul class="lbcamden-list lbcamden-list--dash">\n      ';
        frame = frame.push();
        var t_3 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "relatedContent");
        if (t_3) {
          t_3 = runtime.fromIterator(t_3);
          var t_2 = t_3.length;
          for (var t_1 = 0; t_1 < t_3.length; t_1++) {
            var t_4 = t_3[t_1];
            frame.set("item", t_4);
            frame.set("loop.index", t_1 + 1);
            frame.set("loop.index0", t_1);
            frame.set("loop.revindex", t_2 - t_1);
            frame.set("loop.revindex0", t_2 - t_1 - 1);
            frame.set("loop.first", t_1 === 0);
            frame.set("loop.last", t_1 === t_2 - 1);
            frame.set("loop.length", t_2);
            output += '\n        <li><a href="';
            output += runtime.suppressValue(runtime.memberLookup(t_4, "href"), env.opts.autoescape);
            output += '">';
            output += runtime.suppressValue(runtime.memberLookup(t_4, "text"), env.opts.autoescape);
            output += "</a></li>\n      ";
            ;
          }
        }
        frame = frame.pop();
        output += "\n    </ul>\n  </div>\n</aside>\n\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/search/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/search/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenSearch");
        context.setVariable("LBCamdenSearch", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/search/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes")) {
          output += "\n  ";
          var t_1;
          t_1 = runtime.contextOrFrameLookup(context, frame, "classNames") + " " + runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes");
          frame.set("classNames", t_1, true);
          if (frame.topLevel) {
            context.setVariable("classNames", t_1);
          }
          if (frame.topLevel) {
            context.addExport("classNames", t_1);
          }
          output += "\n";
          ;
        }
        output += '\n<search>\n<form\n  class="lbcamden-search ';
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "classNames"), env.opts.autoescape);
        output += " ";
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "alt")) {
          output += " lbcamden-search--alt";
          ;
        }
        output += '"\n  action="';
        output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "action"), "/search"), env.opts.autoescape);
        output += '"\n  method="';
        output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "method"), "get"), env.opts.autoescape);
        output += '"\n  autocomplete="off">\n  <label\n    class="govuk-label govuk-label--l govuk-visually-hidden"\n    for="lbcamden-search__box">\n      ';
        output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "labelText"), "Search Camden.gov.uk"), env.opts.autoescape);
        output += '\n  </label>\n  <input\n    type="text"\n    name="';
        output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "name"), "search"), env.opts.autoescape);
        output += '"\n    class="lbcamden-search__input"\n    value="';
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "value"), env.opts.autoescape);
        output += '"\n    id="lbcamden-search__box" ';
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "placeholderText")) {
          output += 'placeholder="';
          output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "placeholderText"), env.opts.autoescape);
          output += '"';
          ;
        }
        output += "\n    ";
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "resultsCountId")) {
          output += 'aria-describedby="';
          output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "resultsCountId"), env.opts.autoescape);
          output += '"';
          ;
        }
        output += " />\n    ";
        if (runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "additionalParameters")) {
          output += "\n      ";
          frame = frame.push();
          var t_4 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "additionalParameters");
          if (t_4) {
            t_4 = runtime.fromIterator(t_4);
            var t_2;
            if (runtime.isArray(t_4)) {
              var t_3 = t_4.length;
              for (t_2 = 0; t_2 < t_4.length; t_2++) {
                var t_5 = t_4[t_2][0];
                frame.set("[object Object]", t_4[t_2][0]);
                var t_6 = t_4[t_2][1];
                frame.set("[object Object]", t_4[t_2][1]);
                frame.set("loop.index", t_2 + 1);
                frame.set("loop.index0", t_2);
                frame.set("loop.revindex", t_3 - t_2);
                frame.set("loop.revindex0", t_3 - t_2 - 1);
                frame.set("loop.first", t_2 === 0);
                frame.set("loop.last", t_2 === t_3 - 1);
                frame.set("loop.length", t_3);
                output += '\n        <input type="hidden" name="';
                output += runtime.suppressValue(t_5, env.opts.autoescape);
                output += '" value="';
                output += runtime.suppressValue(t_6, env.opts.autoescape);
                output += '">\n      ';
                ;
              }
            } else {
              t_2 = -1;
              var t_3 = runtime.keys(t_4).length;
              for (var t_7 in t_4) {
                t_2++;
                var t_8 = t_4[t_7];
                frame.set("name", t_7);
                frame.set("value", t_8);
                frame.set("loop.index", t_2 + 1);
                frame.set("loop.index0", t_2);
                frame.set("loop.revindex", t_3 - t_2);
                frame.set("loop.revindex0", t_3 - t_2 - 1);
                frame.set("loop.first", t_2 === 0);
                frame.set("loop.last", t_2 === t_3 - 1);
                frame.set("loop.length", t_3);
                output += '\n        <input type="hidden" name="';
                output += runtime.suppressValue(t_7, env.opts.autoescape);
                output += '" value="';
                output += runtime.suppressValue(t_8, env.opts.autoescape);
                output += '">\n      ';
                ;
              }
            }
          }
          frame = frame.pop();
          output += "\n    ";
          ;
        }
        output += '\n  <button\n    type="submit"\n    class="lbcamden-search__btn"\n    id="lbcamden-search__btn">\n      ';
        output += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "labelText"), "Search Camden.gov.uk"), env.opts.autoescape);
        output += "\n  </button>\n</form>\n</search>\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/search-results/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/search-results/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenSearchResults");
        context.setVariable("LBCamdenSearchResults", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/search-results/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var t_1;
        t_1 = function() {
          var output2 = "";
          output2 += "h";
          output2 += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "headingLevel"), "3"), env.opts.autoescape);
          ;
          return output2;
        }();
        frame.set("h", t_1, true);
        if (frame.topLevel) {
          context.setVariable("h", t_1);
        }
        if (frame.topLevel) {
          context.addExport("h", t_1);
        }
        output += '\n\n<ul class="lbcamden-search-results">\n  ';
        frame = frame.push();
        var t_4 = runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "items");
        if (t_4) {
          t_4 = runtime.fromIterator(t_4);
          var t_3 = t_4.length;
          for (var t_2 = 0; t_2 < t_4.length; t_2++) {
            var t_5 = t_4[t_2];
            frame.set("item", t_5);
            frame.set("loop.index", t_2 + 1);
            frame.set("loop.index0", t_2);
            frame.set("loop.revindex", t_3 - t_2);
            frame.set("loop.revindex0", t_3 - t_2 - 1);
            frame.set("loop.first", t_2 === 0);
            frame.set("loop.last", t_2 === t_3 - 1);
            frame.set("loop.length", t_3);
            output += '\n  <li class="lbcamden-search-results__item">\n    <';
            output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "h"), env.opts.autoescape);
            output += ' class="lbcamden-search-results__heading govuk-heading-l">\n      <a href="';
            output += runtime.suppressValue(runtime.memberLookup(t_5, "href"), env.opts.autoescape);
            output += '">\n        ';
            output += runtime.suppressValue(runtime.memberLookup(t_5, "title"), env.opts.autoescape);
            output += "\n      </a>\n    </";
            output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "h"), env.opts.autoescape);
            output += ">\n\n    ";
            if (runtime.memberLookup(t_5, "externalSite")) {
              output += '\n      <div class="lbcamden-search-results__location">\n        ';
              output += runtime.suppressValue(runtime.memberLookup(t_5, "externalSite"), env.opts.autoescape);
              output += "\n      </div>\n    ";
              ;
            } else {
              output += '\n      <div class="govuk-breadcrumbs govuk-breadcrumbs--collapse-on-mobile lbcamden-search-results__location">\n        <ol class="govuk-breadcrumbs__list">\n          ';
              frame = frame.push();
              var t_8 = runtime.memberLookup(t_5, "breadcrumbs");
              if (t_8) {
                t_8 = runtime.fromIterator(t_8);
                var t_7 = t_8.length;
                for (var t_6 = 0; t_6 < t_8.length; t_6++) {
                  var t_9 = t_8[t_6];
                  frame.set("crumb", t_9);
                  frame.set("loop.index", t_6 + 1);
                  frame.set("loop.index0", t_6);
                  frame.set("loop.revindex", t_7 - t_6);
                  frame.set("loop.revindex0", t_7 - t_6 - 1);
                  frame.set("loop.first", t_6 === 0);
                  frame.set("loop.last", t_6 === t_7 - 1);
                  frame.set("loop.length", t_7);
                  output += '\n            <li class="govuk-breadcrumbs__list-item">\n              ';
                  output += runtime.suppressValue(runtime.memberLookup(t_9, "text"), env.opts.autoescape);
                  output += "\n            </li>\n          ";
                  ;
                }
              }
              frame = frame.pop();
              output += "\n        </ol>\n      </div>\n    ";
              ;
            }
            output += '\n\n    <div class="lbcamden-search-results__description">\n      <p>';
            output += runtime.suppressValue(runtime.memberLookup(t_5, "summary"), env.opts.autoescape);
            output += "</p>\n    </div>\n  </li>\n  ";
            ;
          }
        }
        frame = frame.pop();
        output += "\n</ul>\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/service-banner/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/service-banner/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenServiceBanner");
        context.setVariable("LBCamdenServiceBanner", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/service-banner/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        output += '<section role="banner" class="lbcamden-service-banner ';
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "classes"), env.opts.autoescape);
        output += '">\n  <div class="govuk-width-container">\n    <div class="govuk-grid-row">\n      <div class="govuk-grid-column-two-thirds">\n        <h2 class="';
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "headingClasses"), env.opts.autoescape);
        output += '">';
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "heading"), env.opts.autoescape);
        output += "</h2>\n\n        ";
        output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "shortDescription")), env.opts.autoescape);
        output += "\n      </div>\n    </div>\n  </div>\n</section>\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/video-embed/macro.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        var macro_t_1 = runtime.makeMacro(
          ["params"],
          [],
          function(l_params, kwargs) {
            var callerFrame = frame;
            frame = new runtime.Frame();
            kwargs = kwargs || {};
            if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
              frame.set("caller", kwargs.caller);
            }
            frame.set("params", l_params);
            var t_2 = "";
            var tasks = [];
            tasks.push(
              function(callback) {
                env.getTemplate("./template.njk", false, "src/lbcamden/components/video-embed/macro.njk", false, function(t_4, t_3) {
                  if (t_4) {
                    cb(t_4);
                    return;
                  }
                  callback(null, t_3);
                });
              }
            );
            tasks.push(
              function(template, callback) {
                template.render(context.getVariables(), frame, function(t_6, t_5) {
                  if (t_6) {
                    cb(t_6);
                    return;
                  }
                  callback(null, t_5);
                });
              }
            );
            tasks.push(
              function(result, callback) {
                t_2 += result;
                callback(null);
              }
            );
            env.waterfall(tasks, function() {
            });
            frame = callerFrame;
            return new runtime.SafeString(t_2);
          }
        );
        context.addExport("LBCamdenVideoEmbed");
        context.setVariable("LBCamdenVideoEmbed", macro_t_1);
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/components/video-embed/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        if ("youtube" == runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "platform")) {
          output += '\n    <div class="lbcamden-video-embed">\n        <iframe title="';
          output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "frameTitle"), env.opts.autoescape);
          output += '" src="https://www.youtube-nocookie.com/embed/';
          output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id"), env.opts.autoescape);
          output += '?rel=0&showinfo=0&cc_lang_pref=en&cc_load_policy=1&playsinline=1"\n                frameborder="0"\n                rel="0"\n                allowfullscreen>\n        </iframe>\n    </div>\n';
          ;
        } else {
          if ("vimeo" == runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "platform")) {
            output += '\n    <div class="lbcamden-video-embed">\n        <iframe title="';
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "frameTitle"), env.opts.autoescape);
            output += '" src="https://player.vimeo.com/video/';
            output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "params"), "id"), env.opts.autoescape);
            output += '"\n                frameborder="0"\n                controls="0"\n                allow="fullscreen; picture-in-picture"\n                allowfullscreen>\n        </iframe>\n    </div>\n';
            ;
          }
          ;
        }
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root
    };
  }();
})();
(function() {
  (globalThis.nunjucksPrecompiled = globalThis.nunjucksPrecompiled || {})["src/lbcamden/template.njk"] = /* @__PURE__ */ function() {
    function root(env, context, frame, runtime, cb) {
      var lineno = 0;
      var colno = 0;
      var output = "";
      try {
        var parentTemplate = null;
        env.getTemplate("govuk/components/skip-link/macro.njk", false, "src/lbcamden/template.njk", false, function(t_2, t_1) {
          if (t_2) {
            cb(t_2);
            return;
          }
          t_1.getExported(function(t_3, t_12) {
            if (t_3) {
              cb(t_3);
              return;
            }
            if (Object.prototype.hasOwnProperty.call(t_12, "govukSkipLink")) {
              var t_4 = t_12.govukSkipLink;
            } else {
              cb(new Error("cannot import 'govukSkipLink'"));
              return;
            }
            context.setVariable("govukSkipLink", t_4);
            env.getTemplate("./components/header/macro.njk", false, "src/lbcamden/template.njk", false, function(t_6, t_5) {
              if (t_6) {
                cb(t_6);
                return;
              }
              t_5.getExported(function(t_7, t_52) {
                if (t_7) {
                  cb(t_7);
                  return;
                }
                if (Object.prototype.hasOwnProperty.call(t_52, "LBCamdenHeader")) {
                  var t_8 = t_52.LBCamdenHeader;
                } else {
                  cb(new Error("cannot import 'LBCamdenHeader'"));
                  return;
                }
                context.setVariable("LBCamdenHeader", t_8);
                env.getTemplate("./components/footer/macro.njk", false, "src/lbcamden/template.njk", false, function(t_10, t_9) {
                  if (t_10) {
                    cb(t_10);
                    return;
                  }
                  t_9.getExported(function(t_11, t_92) {
                    if (t_11) {
                      cb(t_11);
                      return;
                    }
                    if (Object.prototype.hasOwnProperty.call(t_92, "LBCamdenFooter")) {
                      var t_122 = t_92.LBCamdenFooter;
                    } else {
                      cb(new Error("cannot import 'LBCamdenFooter'"));
                      return;
                    }
                    context.setVariable("LBCamdenFooter", t_122);
                    env.getTemplate("./components/card/macro.njk", false, "src/lbcamden/template.njk", false, function(t_14, t_13) {
                      if (t_14) {
                        cb(t_14);
                        return;
                      }
                      t_13.getExported(function(t_15, t_132) {
                        if (t_15) {
                          cb(t_15);
                          return;
                        }
                        if (Object.prototype.hasOwnProperty.call(t_132, "LBCamdenCard")) {
                          var t_16 = t_132.LBCamdenCard;
                        } else {
                          cb(new Error("cannot import 'LBCamdenCard'"));
                          return;
                        }
                        context.setVariable("LBCamdenCard", t_16);
                        env.getTemplate("./components/search/macro.njk", false, "src/lbcamden/template.njk", false, function(t_18, t_17) {
                          if (t_18) {
                            cb(t_18);
                            return;
                          }
                          t_17.getExported(function(t_19, t_172) {
                            if (t_19) {
                              cb(t_19);
                              return;
                            }
                            if (Object.prototype.hasOwnProperty.call(t_172, "LBCamdenSearch")) {
                              var t_20 = t_172.LBCamdenSearch;
                            } else {
                              cb(new Error("cannot import 'LBCamdenSearch'"));
                              return;
                            }
                            context.setVariable("LBCamdenSearch", t_20);
                            var t_21;
                            t_21 = env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "assetUrl"), runtime.contextOrFrameLookup(context, frame, "assetPath"));
                            frame.set("assetUrl", t_21, true);
                            if (frame.topLevel) {
                              context.setVariable("assetUrl", t_21);
                            }
                            if (frame.topLevel) {
                              context.addExport("assetUrl", t_21);
                            }
                            output += '<!DOCTYPE html>\n<html lang="';
                            output += runtime.suppressValue(env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "htmlLang"), "en"), env.opts.autoescape);
                            output += '" class="govuk-template ';
                            output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "htmlClasses"), env.opts.autoescape);
                            output += '">\n<head>\n  <meta charset="utf-8">\n  <title';
                            if (runtime.contextOrFrameLookup(context, frame, "pageTitleLang")) {
                              output += ' lang="';
                              output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageTitleLang"), env.opts.autoescape);
                              output += '"';
                              ;
                            }
                            output += ">";
                            (parentTemplate ? function(e, c, f, r, cb2) {
                              cb2("");
                            } : context.getBlock("pageTitle"))(env, context, frame, runtime, function(t_23, t_22) {
                              if (t_23) {
                                cb(t_23);
                                return;
                              }
                              output += t_22;
                              output += '</title>\n  <meta name="description" content="This is an example meta description">\n  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n  ';
                              output += '\n  <meta name="theme-color" content="';
                              output += runtime.suppressValue(env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "themeColor"), "#101812"), env.opts.autoescape);
                              output += '">\n  ';
                              output += '\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n\n  ';
                              (parentTemplate ? function(e, c, f, r, cb2) {
                                cb2("");
                              } : context.getBlock("headIcons"))(env, context, frame, runtime, function(t_25, t_24) {
                                if (t_25) {
                                  cb(t_25);
                                  return;
                                }
                                output += t_24;
                                output += "\n\n  ";
                                (parentTemplate ? function(e, c, f, r, cb2) {
                                  cb2("");
                                } : context.getBlock("head"))(env, context, frame, runtime, function(t_27, t_26) {
                                  if (t_27) {
                                    cb(t_27);
                                    return;
                                  }
                                  output += t_26;
                                  output += "\n  ";
                                  output += "\n  ";
                                  output += '\n  <meta property="og:image" content="';
                                  output += runtime.suppressValue(env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "assetUrl"), "/assets"), env.opts.autoescape);
                                  output += '/images/ms-icon-310x310.png">\n</head>\n<body\n  class="govuk-template__body ';
                                  output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "bodyClasses"), env.opts.autoescape);
                                  output += '"';
                                  frame = frame.push();
                                  var t_30 = runtime.contextOrFrameLookup(context, frame, "bodyAttributes");
                                  if (t_30) {
                                    t_30 = runtime.fromIterator(t_30);
                                    var t_28;
                                    if (runtime.isArray(t_30)) {
                                      var t_29 = t_30.length;
                                      for (t_28 = 0; t_28 < t_30.length; t_28++) {
                                        var t_31 = t_30[t_28][0];
                                        frame.set("[object Object]", t_30[t_28][0]);
                                        var t_32 = t_30[t_28][1];
                                        frame.set("[object Object]", t_30[t_28][1]);
                                        frame.set("loop.index", t_28 + 1);
                                        frame.set("loop.index0", t_28);
                                        frame.set("loop.revindex", t_29 - t_28);
                                        frame.set("loop.revindex0", t_29 - t_28 - 1);
                                        frame.set("loop.first", t_28 === 0);
                                        frame.set("loop.last", t_28 === t_29 - 1);
                                        frame.set("loop.length", t_29);
                                        output += " ";
                                        output += runtime.suppressValue(t_31, env.opts.autoescape);
                                        output += '="';
                                        output += runtime.suppressValue(t_32, env.opts.autoescape);
                                        output += '"';
                                        ;
                                      }
                                    } else {
                                      t_28 = -1;
                                      var t_29 = runtime.keys(t_30).length;
                                      for (var t_33 in t_30) {
                                        t_28++;
                                        var t_34 = t_30[t_33];
                                        frame.set("attribute", t_33);
                                        frame.set("value", t_34);
                                        frame.set("loop.index", t_28 + 1);
                                        frame.set("loop.index0", t_28);
                                        frame.set("loop.revindex", t_29 - t_28);
                                        frame.set("loop.revindex0", t_29 - t_28 - 1);
                                        frame.set("loop.first", t_28 === 0);
                                        frame.set("loop.last", t_28 === t_29 - 1);
                                        frame.set("loop.length", t_29);
                                        output += " ";
                                        output += runtime.suppressValue(t_33, env.opts.autoescape);
                                        output += '="';
                                        output += runtime.suppressValue(t_34, env.opts.autoescape);
                                        output += '"';
                                        ;
                                      }
                                    }
                                  }
                                  frame = frame.pop();
                                  output += "\n>\n<script";
                                  if (runtime.contextOrFrameLookup(context, frame, "cspNonce")) {
                                    output += ' nonce="';
                                    output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "cspNonce"), env.opts.autoescape);
                                    output += '"';
                                    ;
                                  }
                                  output += ">document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled')<\/script>\n\n";
                                  (parentTemplate ? function(e, c, f, r, cb2) {
                                    cb2("");
                                  } : context.getBlock("bodyStart"))(env, context, frame, runtime, function(t_36, t_35) {
                                    if (t_36) {
                                      cb(t_36);
                                      return;
                                    }
                                    output += t_35;
                                    output += "\n\n";
                                    (parentTemplate ? function(e, c, f, r, cb2) {
                                      cb2("");
                                    } : context.getBlock("skipLink"))(env, context, frame, runtime, function(t_38, t_37) {
                                      if (t_38) {
                                        cb(t_38);
                                        return;
                                      }
                                      output += t_37;
                                      output += "\n\n";
                                      (parentTemplate ? function(e, c, f, r, cb2) {
                                        cb2("");
                                      } : context.getBlock("header"))(env, context, frame, runtime, function(t_40, t_39) {
                                        if (t_40) {
                                          cb(t_40);
                                          return;
                                        }
                                        output += t_39;
                                        output += "\n\n";
                                        (parentTemplate ? function(e, c, f, r, cb2) {
                                          cb2("");
                                        } : context.getBlock("main"))(env, context, frame, runtime, function(t_42, t_41) {
                                          if (t_42) {
                                            cb(t_42);
                                            return;
                                          }
                                          output += t_41;
                                          output += "\n\n";
                                          (parentTemplate ? function(e, c, f, r, cb2) {
                                            cb2("");
                                          } : context.getBlock("footer"))(env, context, frame, runtime, function(t_44, t_43) {
                                            if (t_44) {
                                              cb(t_44);
                                              return;
                                            }
                                            output += t_43;
                                            output += "\n\n";
                                            (parentTemplate ? function(e, c, f, r, cb2) {
                                              cb2("");
                                            } : context.getBlock("bodyEnd"))(env, context, frame, runtime, function(t_46, t_45) {
                                              if (t_46) {
                                                cb(t_46);
                                                return;
                                              }
                                              output += t_45;
                                              output += "\n</body>\n</html>\n";
                                              if (parentTemplate) {
                                                parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
                                              } else {
                                                cb(null, output);
                                              }
                                            });
                                          });
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_pageTitle(env, context, frame, runtime, cb) {
      var lineno = 12;
      var colno = 72;
      var output = "";
      try {
        var frame = frame.push(true);
        output += "LBCamden Front End Components";
        cb(null, output);
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_headIcons(env, context, frame, runtime, cb) {
      var lineno = 20;
      var colno = 5;
      var output = "";
      try {
        var frame = frame.push(true);
        output += '\n    <link rel="shortcut icon" sizes="16x16 32x32 48x48"\n          href="';
        output += runtime.suppressValue(env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "assetPath"), "/assets"), env.opts.autoescape);
        output += '/images/favicons/favicon.ico"\n          type="image/x-icon">\n    <link rel="apple-touch-icon" sizes="180x180"\n          href="';
        output += runtime.suppressValue(env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "assetPath"), "/assets"), env.opts.autoescape);
        output += '/images/favicons/apple-icon-180x180.png">\n    <link rel="apple-touch-icon" sizes="152x152"\n          href="';
        output += runtime.suppressValue(env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "assetPath"), "/assets"), env.opts.autoescape);
        output += '/images/favicons/apple-icon-152x152.png">\n    <link rel="apple-touch-icon" href="';
        output += runtime.suppressValue(env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "assetPath"), "/assets"), env.opts.autoescape);
        output += '/images/favicons/apple-icon.png">\n  ';
        cb(null, output);
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_head(env, context, frame, runtime, cb) {
      var lineno = 31;
      var colno = 5;
      var output = "";
      try {
        var frame = frame.push(true);
        cb(null, output);
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_bodyStart(env, context, frame, runtime, cb) {
      var lineno = 41;
      var colno = 3;
      var output = "";
      try {
        var frame = frame.push(true);
        cb(null, output);
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_skipLink(env, context, frame, runtime, cb) {
      var lineno = 43;
      var colno = 3;
      var output = "";
      try {
        var frame = frame.push(true);
        output += "\n  ";
        output += runtime.suppressValue((lineno = 44, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govukSkipLink"), "govukSkipLink", context, [{ "href": "#main-content", "text": "Skip to main content" }])), env.opts.autoescape);
        output += "\n";
        cb(null, output);
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_header(env, context, frame, runtime, cb) {
      var lineno = 50;
      var colno = 3;
      var output = "";
      try {
        var frame = frame.push(true);
        output += "\n  ";
        output += runtime.suppressValue((lineno = 51, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "LBCamdenHeader"), "LBCamdenHeader", context, [])), env.opts.autoescape);
        output += "\n";
        cb(null, output);
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_main(env, context, frame, runtime, cb) {
      var lineno = 54;
      var colno = 3;
      var output = "";
      try {
        var frame = frame.push(true);
        output += '\n  <main class="govuk-main-wrapper ';
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "containerClasses"), env.opts.autoescape);
        output += '" role="main"';
        if (runtime.contextOrFrameLookup(context, frame, "mainLang")) {
          output += ' lang="';
          output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "mainLang"), env.opts.autoescape);
          output += '"';
          ;
        }
        output += ">\n    ";
        context.getBlock("beforeContent")(env, context, frame, runtime, function(t_48, t_47) {
          if (t_48) {
            cb(t_48);
            return;
          }
          output += t_47;
          output += '\n    <div class="';
          output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "mainClasses"), env.opts.autoescape);
          output += '" id="main-content">\n      ';
          context.getBlock("content")(env, context, frame, runtime, function(t_50, t_49) {
            if (t_50) {
              cb(t_50);
              return;
            }
            output += t_49;
            output += "\n    </div>\n    ";
            context.getBlock("postContent")(env, context, frame, runtime, function(t_52, t_51) {
              if (t_52) {
                cb(t_52);
                return;
              }
              output += t_51;
              output += "\n  </main>\n  ";
              context.getBlock("afterContent")(env, context, frame, runtime, function(t_54, t_53) {
                if (t_54) {
                  cb(t_54);
                  return;
                }
                output += t_53;
                output += "\n";
                cb(null, output);
              });
            });
          });
        });
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_beforeContent(env, context, frame, runtime, cb) {
      var lineno = 56;
      var colno = 7;
      var output = "";
      try {
        var frame = frame.push(true);
        output += "\n\n    ";
        cb(null, output);
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_content(env, context, frame, runtime, cb) {
      var lineno = 60;
      var colno = 9;
      var output = "";
      try {
        var frame = frame.push(true);
        cb(null, output);
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_postContent(env, context, frame, runtime, cb) {
      var lineno = 62;
      var colno = 7;
      var output = "";
      try {
        var frame = frame.push(true);
        cb(null, output);
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_afterContent(env, context, frame, runtime, cb) {
      var lineno = 64;
      var colno = 5;
      var output = "";
      try {
        var frame = frame.push(true);
        output += "\n\n  ";
        cb(null, output);
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_footer(env, context, frame, runtime, cb) {
      var lineno = 69;
      var colno = 3;
      var output = "";
      try {
        var frame = frame.push(true);
        output += "\n  ";
        output += runtime.suppressValue((lineno = 70, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "LBCamdenFooter"), "LBCamdenFooter", context, [{}])), env.opts.autoescape);
        output += "\n";
        cb(null, output);
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    function b_bodyEnd(env, context, frame, runtime, cb) {
      var lineno = 75;
      var colno = 3;
      var output = "";
      try {
        var frame = frame.push(true);
        cb(null, output);
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      b_pageTitle,
      b_headIcons,
      b_head,
      b_bodyStart,
      b_skipLink,
      b_header,
      b_main,
      b_beforeContent,
      b_content,
      b_postContent,
      b_afterContent,
      b_footer,
      b_bodyEnd,
      root
    };
  }();
})();
