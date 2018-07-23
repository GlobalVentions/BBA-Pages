/*code start for Custom dropdown code*/
$(function () {
    var $divs = $("#banner-group").children("div"),
        index = 0;

    $("#next").click(function () {
        updateStatus(1);
    });

    $("#prev").click(function () {
        updateStatus(-1);
    });

    function updateStatus(a) {

        $divs.eq(index).removeClass("current").hide();
        index += a;
        $divs.eq(index).addClass("current").show();

        $("#next").toggle((index !== $divs.length - 1));
        $("#prev").toggle(index !== 0);
    }

    /* JS Code for Badge slider */
    if ($('.badge-slider').length) {
        $('.badge-slider').owlCarousel({
            autoplay: true,
            autoplayTimeout: 6500,
            smartSpeed: 1000,
            loop: true,
            nav: false,
            dots: true,
            margin: 15,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        });
    }
    if ($('.owl-most-popular').length) {
        $('.owl-most-popular').owlCarousel({
            autoplay: true,
            autoplayTimeout: 6500,
            smartSpeed: 1000,
            loop: true,
            nav: true,
            center: true,
            dots: false,
            margin: 15,
            video: true,
            videoWidth: false,
            videoHeight: false,
            lazyLoad:true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
    /* JS Code for video slider */
    if ($('.owl-featured-today').length) {
        $('.owl-featured-today').owlCarousel({
            autoplay: false,
            autoplayTimeout: 6500,
            smartSpeed: 1000,
            loop: true,
            center: true,
            nav: true,
            dots: false,
            video: true,
            videoWidth: true,
            videoHeight: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2,
                    margin: 30
                },
                992: {
                    items: 2,
                    margin: 80
                }
            }
        });
    }
    if ($('.owl-featured-today-second').length) {
        $('.owl-featured-today-second').owlCarousel({
            autoplay: true,
            autoplayTimeout: 6500,
            smartSpeed: 1000,
            loop: true,
            center: true,
            nav: true,
            dots: false,
            video: true,
            videoWidth: true,
            videoHeight: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2,
                    margin: 15
                },
                992: {
                    items: 2,
                    margin: 40
                }
            }
        });
    }

    /* JS Code for video slider */
    if ($('.owl-financial-advisor').length) {
        $('.owl-financial-advisor').owlCarousel({
            autoplay: false,
            autoplayTimeout: 6500,
            smartSpeed: 1000,
            loop: true,
            center: true,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2,
                    margin: 20
                },
                992: {
                    items: 4,
                    margin: 20
                }
            }
        });
    }
    if ($('.owl-career-opportunities').length) {
        $('.owl-career-opportunities').owlCarousel({
            autoplay: false,
            autoplayTimeout: 6500,
            smartSpeed: 1000,
            loop: true,
            nav: true,
            dots: false,
            margin: 15,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    if ($('.owl-most-articles').length) {
        $('.owl-most-articles').owlCarousel({
            autoplay: true,
            autoplayTimeout: 6500,
            smartSpeed: 1000,
            loop: true,
            nav: true,
            dots: false,
            margin: 15,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
});

/**/
function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function () {
        var obj = this;

        obj.dd.on('click', function (event) {
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};

$(function () {

    var dd = new DropDown($('#dd'));
});

/**/
function DropDown(el) {
    this.dd1 = el;
    this.placeholder = this.dd1.children('span');
    this.opts = this.dd1.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function () {
        var obj = this;

        obj.dd1.on('click', function (event) {
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};

$(function () {
    var dd1 = new DropDown($('#dd1'));
});

/**/
function DropDown(el) {
    this.dd2 = el;
    this.placeholder = this.dd2.children('span');
    this.opts = this.dd2.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function () {
        var obj = this;

        obj.dd2.on('click', function (event) {
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};

$(function () {
    var dd1 = new DropDown($('#dd2'));
});

/**/
function DropDown(el) {
    this.dd3 = el;
    this.placeholder = this.dd3.children('span');
    this.opts = this.dd3.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function () {
        var obj = this;

        obj.dd3.on('click', function (event) {
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};

$(function () {
    var dd1 = new DropDown($('#dd3'));
});

/**/
function DropDown(el) {
    this.dd4 = el;
    this.placeholder = this.dd4.children('span');
    this.opts = this.dd4.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function () {
        var obj = this;

        obj.dd4.on('click', function (event) {
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};

$(function () {
    var dd1 = new DropDown($('#dd4'));
});

/**/
function DropDown(el) {
    this.dd5 = el;
    this.placeholder = this.dd5.children('span');
    this.opts = this.dd5.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function () {
        var obj = this;

        obj.dd5.on('click', function (event) {
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};

$(function () {
    var dd1 = new DropDown($('#dd5'));
});

/**/
function DropDown(el) {
    this.dd6 = el;
    this.placeholder = this.dd6.children('span');
    this.opts = this.dd6.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function () {
        var obj = this;

        obj.dd6.on('click', function (event) {
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};

$(function () {
    var dd1 = new DropDown($('#dd6'));
});

/**/
function DropDown(el) {
    this.dd7 = el;
    this.placeholder = this.dd7.children('span');
    this.opts = this.dd7.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function () {
        var obj = this;

        obj.dd7.on('click', function (event) {
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};

$(function () {
    var dd1 = new DropDown($('#dd7'));
});

/**/
function DropDown(el) {
    this.dd8 = el;
    this.placeholder = this.dd8.children('span');
    this.opts = this.dd8.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function () {
        var obj = this;

        obj.dd8.on('click', function (event) {
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};

$(function () {
    var dd1 = new DropDown($('#dd8'));
});

/**/
function DropDown(el) {
    this.dd9 = el;
    this.placeholder = this.dd9.children('span');
    this.opts = this.dd9.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function () {
        var obj = this;

        obj.dd9.on('click', function (event) {
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};

$(function () {
    var dd1 = new DropDown($('#dd9'));
});

/**/
function DropDown(el) {
    this.dd10 = el;
    this.placeholder = this.dd10.children('span');
    this.opts = this.dd10.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function () {
        var obj = this;

        obj.dd10.on('click', function (event) {
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};

$(function () {
    var dd1 = new DropDown($('#dd10'));
});

/**/
function DropDown(el) {
    this.dd11 = el;
    this.placeholder = this.dd11.children('span');
    this.opts = this.dd11.find('.dropdown a');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function () {
        var obj = this;

        obj.dd11.on('click', function (event) {
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};

$(function () {
    var dd1 = new DropDown($('#dd11'));
});

/* Js code for include header file */
$(document).ready(function () {
    $.get("header.html", function (data) {
        $("#header").html(data);
    });
});

$(document).ready(function () {
    $.get("pro-header.html", function (data) {
        $("#pro-header").html(data);
    });
});

/* Js code for include footer file */
$(document).ready(function () {
    $.get("footer.html", function (data) {
        $("#footer").html(data);
    });
});

$(document).ready(function () {
    $.get("pro-footer.html", function (data) {
        $("#pro-footer").html(data);
    });
});

/* Toggle Image Change Code */
$(".LikeToggler").click(function () {
    $(this).find('img').toggle();
});

/* JS code for hide show link your bank form */
$(document).ready(function () {
    $(".stepsDivs .DivStepDiv").each(function (e) {
        if (e != 0)
            $(this).hide();
    });

    $("#next-form").click(function () {
        if ($(".stepsDivs .DivStepDiv:visible").next().length != 0)
            $(".stepsDivs .DivStepDiv:visible").next().show().prev().hide();
        else {
            $(".stepsDivs .DivStepDiv:visible").hide();
            $(".stepsDivs .DivStepDiv:first").show();
        }
        return false;
    });

    $("#prev-form").click(function () {
        if ($(".stepsDivs .DivStepDiv:visible").prev().length != 0)
            $(".stepsDivs .DivStepDiv:visible").prev().show().next().hide();
        else {
            $(".stepsDivs .DivStepDiv:visible").hide();
            $(".stepsDivs .DivStepDiv:last").show();
        }
        return false;
    });
    $("#next-form-1").click(function () {
        if ($(".stepsDivs .DivStepDiv:visible").next().length != 0)
            $(".stepsDivs .DivStepDiv:visible").next().show().prev().hide();
        else {
            $(".stepsDivs .DivStepDiv:visible").hide();
            $(".stepsDivs .DivStepDiv:first").show();
        }
        return false;
    });

    $("#prev-form-1").click(function () {
        if ($(".stepsDivs .DivStepDiv:visible").prev().length != 0)
            $(".stepsDivs .DivStepDiv:visible").prev().show().next().hide();
        else {
            $(".stepsDivs .DivStepDiv:visible").hide();
            $(".stepsDivs .DivStepDiv:last").show();
        }
        return false;
    });
});

/* JS code for hide show div based on checkbox in Global Sign Up Page*/
$(function () {
    $("#chkPassport").click(function () {
        if ($(this).is(":checked")) {
            $("#dvPassport").show();
        } else {
            $("#dvPassport").hide();
        }
    });
});
/* JS code for hide show div based on checkbox in Post article Page*/
/*$(function () {
    $("#smartread").click(function () {
        if ($(this).is(":checked")) {
            $("#divreadtimeone").hide();
            $("#divreadtimetwo").show();
        } else {
            $("#divreadtimeone").show();
            $("#divreadtimetwo").hide();
        }
    });
});*/

/* JS CODE FOR BURGER MENU MAIN TOGGLE */
/*function menuToggle(){
    $('.burger-menu-dropdown').click(function(event){
        event.stopPropagation();
        $(".burger-menu-main").toggle();
    });
    $(".burger-menu-main").on("click", function (event) {
        event.stopPropagation();
    });
}
$(document).on("click", function () {
    $(".burger-menu-main").hide();
});*/
function calculatorresiltdetailsToggle(){
    $(".calculator-result-description").toggle();
}
function calculatortipsToggle(){
    $(".calculator-tips-description").toggle();
}
function calculatordisclaimerToggle(){
    $(".calculator-disclaimer-description").toggle();
}
function menuToggle(){
    $(".burger-menu-main").toggle();
}
function promenuToggle(){
    $(".pro-burger-menu-main").toggle();
}
function knowledgeBaseToggle(){
    $(".knowledge-menu-main").toggle();
}
function opportunitiesToggle(){
    $(".opportunities-menu-main").toggle();
}
function allopportunitiesToggle(){
    $(".allopportunities-menu-main").toggle();
}
function allresourcesToggle(){
    $(".allresources-menu-main").toggle();
}
function financialcalculatorToggle(){
    $(".financial-calculator-menu-main").toggle();
}
function threeDotsToggle(){
    $(".ThreeDots-menu-main").toggle();
}
function searchToggle(){
    $(".SearchToggle-main").toggle();
}

/* JS Code for video play pause button */
$("a[href='#']").click(function(e) {
    e.preventDefault();
});

/* JS code for Checkckbox filte in post calculator page */
$(document).ready(function()
{
    //hide all contents
    $('div[id^=sb]').hide();
    $('input[id^=chk]').change(function(){
        // get checkbox index
        var index = $(this).attr('id').replace('chk','');
        //show respective contents
        if($(this).is(':checked'))
            $('#sb'+index).show();
        else
            $('#sb'+index).hide();
    });
    $(".default-banking").show();
    $(".check_banking").click(function() {
        if($(this).is(":checked")) {
            $(".default-banking").hide();
        } else {
            $(".default-banking").show();
        }
    });
    $(".unchecked").on("click", function() {
        $(this).toggleClass("checked");
    });
    $("label.filter-checkbox-label").click(function () {
        var $this = $(this);
        $this.closest(".unchecked").toggleClass("checked");
    });
    /* JS Code for toggle in account settings page */
    $('#click').click(function(){
        $('#editForm').toggleClass('hide-bank');
        $('#connect').toggleClass('hide-bank');

        var visible = $('#connect').is(":visible");
        if (visible) {
            $('#click').html('Edit');
        } else {
            $('#click').html('Done');
        }
    });

    /* Js code for smooth scrolling */
    $(document).ready(function(){
        $("a").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){
                    window.location.hash = hash;
                });
            }
        });
    });
    $(document).ready(function() {

        $('.btn-add').on("click", function(){
            //we select the box clone it and insert it after the box
            $('.clonebox:first').clone().insertAfter(".clonebox:last");
        });

        $(document).on("click", ".btn-remove", function() {
            $(this).closest(".clonebox").remove();
        });
    });

    $(document).ready(function(){
        $('.results-rate').on("click", function(){
            $(".funding-rate").addClass("d-block");
        });
        $('.reset-rate').on("click", function(){
            $(".funding-rate").removeClass("d-block");
            $(".funding-rate").addClass("d-none");
        });
    });
    /* JS code for hide show div based on Radio button in Trending Calculators*/
    $(function() {
        $('input[name=have-credit-card]').on('click init-post-format', function() {
            $('#have-credit-card-div').toggle($('#yes3').prop('checked'));
        }).trigger('init-post-format');
    });
});