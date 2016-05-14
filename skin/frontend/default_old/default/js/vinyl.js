function resendTestFields(formData, jqForm, options)
{
    console.log('resend');
    mail = jQuery("input[name=login]", jqForm);
    if (!is_valid_email(jQuery(mail).val()))
    {
        alert("Please enter valid Email Address")
        return false;
    }
    jQuery("input[name=type]", jqForm).attr('value', 'resend_active');
    return true;
}

function remindeTestFields(formData, jqForm, options)
{
    mail = jQuery("input[name=mail]", jqForm);
    if (!is_valid_email(jQuery(mail).val()))
    {
        alert("Please enter valid Email Address")
        return false;
    }
    return true;
}

function loginTestFields(formData, jqForm, options)
{
    elements = jQuery('input', jqForm);
    for (var i = 0; i < elements.length; i++) {
        if (!jQuery(elements[i]).val() || jQuery(elements[i]).val() == jQuery(elements[i]).attr('alt')) {
            alert('Please enter a value for both E-mail and Password');
            return false;
        }
    }
}

function is_valid_email(email)
{
    return /^([a-zA-Z0-9_\.\-+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
}

function registerTestFields(formData, jqForm, options)
{
    first_name = jQuery("input[name=first_name]", jqForm);
    surename = jQuery("input[name=surename]", jqForm);
    mail = jQuery("input[name=mail]", jqForm);
    password = jQuery("input[name=password]", jqForm);
    retype_password = jQuery("input[name=retype_password]", jqForm);
    if (!jQuery(first_name).val() || jQuery(first_name).val() == jQuery(first_name).attr('alt'))
    {
        alert("Please enter a value for First Name")
        return false;
    }
    if (!jQuery(surename).val() || jQuery(surename).val() == jQuery(surename).attr('alt'))
    {
        alert("Please enter a value for Surename")
        return false;
    }
    if (!is_valid_email(jQuery(mail).val()))
    {
        alert("Please enter valid Email Address")
        return false;
    }
    if (!jQuery(password).val() || jQuery(password).val() == jQuery(password).attr('alt'))
    {
        alert("Please enter a value for Password")
        return false;
    }
    if (jQuery(password).val() != jQuery(retype_password).val())
    {
        alert("Your passwords are different")
        return false;
    }
}

function registerSuccess(data)
{
    if (data.added == true)
    {
        jQuery("#registerError").hide();
        jQuery("#registerSubmit").fadeOut('slow');
        jQuery("#registerForm").fadeOut('slow', function() {
            jQuery("#registerSuccess").fadeIn('slow');
        });
    }
    else
    {
        jQuery("#registerSuccess").hide();
        jQuery("#registerError").hide().html(data.error).fadeIn('slow');
    }
}

function orderTestFields2(formData, jqForm, options)
{
}

function orderTestFields(formData, jqForm, options)
{
    first_name = jQuery("input[name=first_name]", jqForm);
    surename = jQuery("input[name=surename]", jqForm);
    phone = jQuery("input[name=phone]", jqForm);
    address_line_1 = jQuery("input[name=address_line_1]", jqForm);
    city = jQuery("input[name=city]", jqForm);
    post_code = jQuery("input[name=post_code]", jqForm);
    country = jQuery("select[name=country]", jqForm);
    state = jQuery("select[name=state]", jqForm);
    delivery_first_name = jQuery("input[name=delivery_first_name]", jqForm);
    delivery_surename = jQuery("input[name=delivery_surename]", jqForm);
    delivery_address_1 = jQuery("input[name=delivery_address_line_1]", jqForm);
    delivery_city = jQuery("input[name=delivery_city]", jqForm);
    delivery_post_code = jQuery("input[name=delivery_post_code]", jqForm);
    delivery_country = jQuery("select[name=delivery_country]", jqForm);
    delivery_state = jQuery("select[name=delivery_state]", jqForm);

    if (!jQuery(first_name).val() || jQuery(first_name).val() == jQuery(first_name).attr('alt'))
    {
        alert("Please enter a value for First Name")
        return false;
    }
    if (!jQuery(surename).val() || jQuery(surename).val() == jQuery(surename).attr('alt'))
    {
        alert("Please enter a value for Surename")
        return false;
    }
    if (!jQuery(address_line_1).val() || jQuery(address_line_1).val() == jQuery(address_line_1).attr('alt'))
    {
        alert("Please enter a value for Billing First Line of Address")
        return false;
    }
    if (!jQuery(city).val() || jQuery(city).val() == jQuery(city).attr('alt'))
    {
        alert("Please enter a value for Billing City")
        return false;
    }
    if (!jQuery(post_code).val() || jQuery(post_code).val() == jQuery(post_code).attr('alt'))
    {
        alert("Please enter a value for Billing Postage / Zip Code")
        return false;
    }
    if (!jQuery(country).val())
    {
        alert("Please enter a value for Billing Country")
        return false;
    }
    if (jQuery(country).val() == 'US')
    {
        if (!jQuery(state).val())
        {
            alert("Please enter a value for Billing State")
            return false;
        }
    }


    if (!jQuery("input[name=deliver]:checked").length)
    {
        if (!jQuery(delivery_first_name).val() || jQuery(delivery_first_name).val() == jQuery(delivery_first_name).attr('alt'))
        {
            alert("Please enter a value for Delivery First Name")
            return false;
        }
        if (!jQuery(delivery_surename).val() || jQuery(delivery_surename).val() == jQuery(delivery_surename).attr('alt'))
        {
            alert("Please enter a value for Delivery Surename")
            return false;
        }
        if (!jQuery(delivery_address_1).val() || jQuery(delivery_address_1).val() == jQuery(delivery_address_1).attr('alt'))
        {
            alert("Please enter a value for Delivery First Line of Address")
            return false;
        }
        if (!jQuery(delivery_city).val() || jQuery(delivery_city).val() == jQuery(delivery_city).attr('alt'))
        {
            alert("Please enter a value for Delivery City")
            return false;
        }
        if (!jQuery(delivery_post_code).val() || jQuery(delivery_post_code).val() == jQuery(delivery_post_code).attr('alt'))
        {
            alert("Please enter a value for Delivery Postage / Zip Code")
            return false;
        }
        if (!jQuery(delivery_country).val())
        {
            alert("Please enter a value for Delivery Country")
            return false;
        }
        if (jQuery(delivery_country).val() == 'US')
        {
            if (!jQuery(delivery_state).val())
            {
                alert("Please enter a value for Delivery State")
                return false;
            }
        }
    }
}

function orderSuccess(data)
{
    if (data.error)
    {
        alert(data.error);
    }
    else if (data.success == 1)
    {
        window.location.href = '/postage/';
    }
}

function orderSuccess2(data)
{
    if (data.error)
    {
        alert(data.error);
    }
    else if (data.success == 1)
    {
        window.location.href = '/summary/';
    }
}

function paymentSuccess_invoices(data)
{
    if (data.error)
    {
        alert(data.error);
    }
    else if (data.success == 1)
    {
        window.location.href = '/pay-invoices-ok/';
    }
}

function paymentSuccess(data)
{
    if (data.error)
    {
        alert(data.error);
    }
    else if (data.form == 1)
    {
        jQuery(".payment_form").html(data.data);
        jQuery(".payment_form form").submit();
    }
    else if (data.success == 1)
    {
        window.location.href = '/confirmation/';
    }
}

function loginSuccess(data)
{
    jQuery(".content section article.art3 .log .error").hide();
    if (data.login == true)
    {
        if (jQuery("#loginForm input[name=home]").val() == 1)
            window.location.href = '/index/';
        else
            window.location.href = '/your-information/';
    }
    else if (data.blocked == true)
        jQuery("#loginBlocked").fadeIn('slow');
    else if (data.active == true)
        jQuery("#loginActived").fadeIn('slow');
    else
        jQuery("#loginError").fadeIn('slow');
}

function loginSuccess(data)
{
    jQuery(".content section article.art3 .log .error").hide();
    if (data.login == true)
    {
        if (jQuery("#loginForm input[name=home]").val() == 1)
            window.location.href = '/index/';
        else
            window.location.href = '/your-information/';
    }
    else if (data.blocked == true)
        jQuery("#loginBlocked").fadeIn('slow');
    else if (data.active == true)
        jQuery("#loginActived").fadeIn('slow');
    else
        jQuery("#loginError").fadeIn('slow');
}

function resendSuccess(data)
{
    jQuery(".content section article.art3 .log .error").hide();
    jQuery("#loginForm input[name=type]").val('login');
    jQuery("#loginError").fadeIn('slow');
}

function remindeSuccess(data)
{
    jQuery("#remindeError").fadeIn('slow');
}

jQuery(document).ready(function() {

    var optionsResend = {
        beforeSubmit: resendTestFields,
        success: resendSuccess,
        dataType: 'json'
    };

    jQuery("#subForm a").click(function() {
        jQuery("#subForm").submit();
        return false;
    })

    jQuery("#resend_activation_mail").click(function()
    {
        jQuery('#loginForm').ajaxSubmit(optionsResend);
        return false;
    });

    jQuery(".order_select").change(function() {
        window.location.href = jQuery(this).val();
    })

    jQuery('.pay_selected').click(function() {
        jQuery('#pay_invoices').submit();
        return false;
    })

    //ajax login

    var optionsLogin = {
        beforeSubmit: loginTestFields,
        success: loginSuccess,
        dataType: 'json'
    };

    var optionsReminde = {
        beforeSubmit: remindeTestFields,
        success: remindeSuccess,
        dataType: 'json'
    };

    jQuery('#loginSubmit').click(function() {
        jQuery('#loginForm').ajaxSubmit(optionsLogin);
        return false;
    });

    jQuery('#remindeSubmit').click(function() {
        jQuery('#remindeForm').ajaxSubmit(optionsReminde);
        return false;
    });

    //ajax register

    var optionsRegister = {
        beforeSubmit: registerTestFields,
        success: registerSuccess,
        dataType: 'json'
    };

    jQuery('#registerSubmit').click(function() {
        jQuery('#registerForm').ajaxSubmit(optionsRegister);
        return false;
    });

    //ajax order

    var optionsOrder = {
        beforeSubmit: orderTestFields,
        success: orderSuccess,
        dataType: 'json'
    };

    jQuery('#orderSubmit').click(function() {
        jQuery('#orderForm').ajaxSubmit(optionsOrder);
        return false;
    });

    //ajax order2

    var optionsOrder2 = {
        beforeSubmit: orderTestFields2,
        success: orderSuccess2,
        dataType: 'json'
    };

    jQuery('#orderSubmit2').click(function() {
        jQuery('#orderForm2').ajaxSubmit(optionsOrder2);
        return false;
    });

    //ajax payment

    var optionsPayment = {
        success: paymentSuccess,
        dataType: 'json'
    };

    var optionsPayment_invoices = {
        success: paymentSuccess_invoices,
        dataType: 'json'
    };

    jQuery('#paymentSubmit').click(function() {
        jQuery('#paymentForm').ajaxSubmit(optionsPayment);
        return false;
    });

    jQuery('#paymentSubmit_invoices').click(function() {
        jQuery('#paymentForm_invoices').ajaxSubmit(optionsPayment_invoices);
        return false;
    });

    jQuery('#orderForm input[name=deliver]').click(function() {
        if (jQuery('#orderForm input[name=deliver]:checked').length)
        {
            jQuery('#orderForm input[name=delivery_first_name]').attr('disabled', true).addClass('disabled');
            jQuery('#orderForm input[name=delivery_surename]').attr('disabled', true).addClass('disabled');
            jQuery('#orderForm input[name=delivery_address_line_1]').attr('disabled', true).addClass('disabled');
            jQuery('#orderForm input[name=delivery_address_line_2]').attr('disabled', true).addClass('disabled');
            jQuery('#orderForm input[name=delivery_post_code]').attr('disabled', true).addClass('disabled');
            jQuery('#orderForm input[name=delivery_city]').attr('disabled', true).addClass('disabled');
            jQuery('#orderForm select[name=delivery_country]').attr('disabled', true).addClass('disabled');
            jQuery('#orderForm select[name=delivery_state]').attr('disabled', true).addClass('disabled');
        }
        else
        {
            jQuery('#orderForm input[name=delivery_first_name]').removeAttr('disabled').removeClass('disabled');
            jQuery('#orderForm input[name=delivery_surename]').removeAttr('disabled').removeClass('disabled');
            jQuery('#orderForm input[name=delivery_address_line_1]').removeAttr('disabled').removeClass('disabled');
            jQuery('#orderForm input[name=delivery_address_line_2]').removeAttr('disabled').removeClass('disabled');
            jQuery('#orderForm input[name=delivery_post_code]').removeAttr('disabled').removeClass('disabled');
            jQuery('#orderForm input[name=delivery_city]').removeAttr('disabled').removeClass('disabled');
            jQuery('#orderForm select[name=delivery_country]').removeAttr('disabled').removeClass('disabled');
            jQuery('#orderForm select[name=delivery_state]').removeAttr('disabled').removeClass('disabled');
        }
    });

    jQuery("#orderForm2 input[name=postage]").change(function() {
        postage_price = jQuery('#orderForm2 input:checked').attr('price');
        order_price = jQuery('div.postage ul li:eq(0) span em').html();
        full_price = parseFloat(postage_price) + parseFloat(order_price);
        jQuery('div.postage ul li:eq(1) span').html('&pound;' + postage_price);
        jQuery('div.postage ul li:eq(2) span').html('&pound;' + full_price.toFixed(2))
    })

    jQuery("#orderForm2 input[name=postage]").change();

    jQuery('.art1 > ul > li > a').click(function() {
        jQuery('.art1 ul li .active:visible').each(function() {
            jQuery(this).parent().find('> a').show();
            jQuery(this).hide();
        })
        jQuery(this).parent().parent().find('li .active').hide();
        jQuery(this).parent().find('.active').show();
        element_pos = jQuery(this).parent().find('.active').offset();
        box_pos = jQuery(this).parent().parent().offset();
        box_height = jQuery(this).parent().parent().height();
        element_height = jQuery(this).parent().find('.active').height();
        if (box_pos.top + box_height < element_pos.top + element_height + 20)
        {
            top = ((element_pos.top + element_height + 20) - (box_pos.top + box_height))
            t = element_pos.top - top;
            if (t < box_pos.top)
                top = 0;
            jQuery(this).parent().find('.active').css({top: '-' + top + 'px'})
        }
        return false;
    });

    jQuery('.art1 ul li .close').click(function() {
        jQuery(this).parent().parent().parent().parent().find('.active').hide();
        jQuery(this).parent().parent().parent().parent().find('> a').show();
        return false;
    })

    jQuery(".jPlayer").jPlayer({
        swfPath: "/skin/frontend/default/default/flash",
        supplied: "mp3",
        ready: function() {
            if (jQuery('.jp-playlist').length)
            {
                jQuery(this).jPlayer("setMedia", {
                    mp3: jQuery('.jp-playlist ul li:first a').attr('href')
                });
            }
        }
    });

    if (jQuery('.jp-playlist').length)
    {
        jQuery(".jPlayer").bind(jQuery.jPlayer.event.ended + ".jp-repeat", function(event) { // Using ".jp-repeat" namespace so we can easily remove this event
            if (jQuery('.jp-playlist ul li.actual').next().length)
            {
                link_song = jQuery('.jp-playlist ul li.actual').removeClass('actual').next().addClass('actual').find('a').attr('href');
            }
            else
            {
                jQuery('.jp-playlist ul li').removeClass('actual');
                link_song = jQuery('.jp-playlist ul li:first').addClass('actual').find('a').attr('href');
            }
            jQuery(this).jPlayer("setMedia", {
                mp3: link_song
            }).jPlayer("play");
            ;
        });
    }

    jQuery('.tracks a').click(function() {
        if (jQuery(this).parent().hasClass('actual'))
        {
            jQuery(".jPlayer").jPlayer("stop");
            jQuery(this).parent().removeClass('actual');
            return false;
        }
        jQuery('.tracks li').removeClass('actual');
        jQuery(this).parent().addClass('actual');
        track = jQuery(this).attr('href');
        jQuery(".jPlayer").jPlayer("stop").jPlayer("setMedia", {
            mp3: track
        }).jPlayer("play");
        return false;
    })

    jQuery('.jp-next').click(function() {
        elements_number = jQuery('.tracks ul > li').length - 1;
        current = jQuery('.tracks ul > li.actual').index();
        if (current < elements_number)
            number = current + 1;
        else
            number = 0;
        jQuery('.tracks ul li').eq(number).find('a').click();
        return false;
    })

    jQuery('.jp-previous').click(function() {
        elements_number = jQuery('.tracks ul > li').length - 1;
        current = jQuery('.tracks ul > li.actual').index();
        if (current > 0)
            number = current - 1;
        else
            number = elements_number;
        jQuery('.tracks ul li').eq(number).find('a').click();
        return false;
    })

    jQuery("#email_stock").click(function() {
        id_ = jQuery(this).attr('name');
        button = jQuery(this);
        $.ajax({
            type: "POST",
            url: "/ajax.php",
            data: {type: 'email_stock', id: id_},
            dataType: 'json',
            success: function(msg) {
                if (msg.info == 'OK')
                {
                    alert("You will be informed when this vinyl return to stock");
                    jQuery(button).hide();
                }
            }
        });
        return false;
    })

    jQuery("#basket .col-del").click(function() {
        id = jQuery(this).parent().find('input').attr('id');
        element = jQuery(this);
        $.ajax({
            type: "POST",
            url: "/ajax.php",
            data: {type: 'koszyk_usun', id: id},
            dataType: 'json',
            success: function(msg) {
                if (msg.info == 'OK')
                {
                    jQuery(element).parent().parent().remove();
                    jQuery('#basket .suma em').html(msg.suma);
                    number = 1;
                    jQuery("#basket ul > li").each(function() {
                        jQuery('.number', this).html(number);
                        number++;
                    })
                    jQuery('.sztuk span').html(msg.ilosc);
                    if (msg.ilosc <= 0)
                        jQuery('.itemname').html('item');
                    else
                        jQuery('itemname').html('items');
                }
            }
        });
        return false;
    })


    jQuery("#basket .col-item input[type=text]").blur(function() {
        val = parseInt(jQuery(this).val());
        if (!parseInt(val))
            val = 1;
        if (val < 1)
            val = 1;
        jQuery(this).val(val);
        ilosc = val;
        input = jQuery(this);
        id = jQuery(this).attr('id');
        $.ajax({
            type: "POST",
            url: "/ajax.php",
            data: {type: 'koszyk_zmien', id: id, ilosc: ilosc},
            dataType: 'json',
            success: function(msg) {
                if (msg.info == 'OK')
                {
                    jQuery(input).parent().parent().find('.price_white em').html(msg.cena_produktu);
                    jQuery('.sztuk span').html(msg.ilosc);
                    if (msg.ilosc <= 0)
                        jQuery('.itemname').html('item');
                    else
                        jQuery('itemname').html('items');
                    jQuery('#basket .suma em').html(msg.suma);
                }
            }
        });
    })

    jQuery(".newsletter .zapisz").click(function() {
        //jQuery(".newsletter .form input[name=zapisz]").val(1);
        jQuery(".newsletter form").submit();
        return false;
    })

    jQuery(".newsletter .wypisz").click(function() {
        jQuery(".newsletter .form input[name=wypisz]").val(1);
        jQuery(".newsletter form").submit();
        return false;
    })

    jQuery(".newsletter_link").click(function() {
        jQuery(".newsletter").toggle();
        return false;
    })

    jQuery("#comment_send").click(function() {
        jQuery("#comment_form").submit();
        return false;
    })

    jQuery(".buy-button2").click(function() {
        alert('Temp out of stock');
        return false;
    });

    jQuery(".buy-button").click(function() {
        if (jQuery(this).hasClass('presale'))
            alert('all orders placed will be held until all items are in stock, so it may be best to order presale items separately');
        jQuery('form#product_addtocart_form').submit();
        return false
    });

    jQuery('#subForm input[type=text], #login input[type=text], #orderForm input[type=text], .header-search input[type=text], #comment_form textarea, #paymentForm input[type=text], #paymentForm_invoices input[type=text]').focus(function() {
        if (jQuery(this).val() == jQuery(this).attr('alt'))
            jQuery(this).val('');
        if (jQuery(this).hasClass('password') && jQuery(this).val() == '')
            jQuery(this).removeClass('pass');
    }).blur(function() {
        if (jQuery(this).hasClass('password') && jQuery(this).val() == '') {
            jQuery(this).addClass('pass');
            jQuery(this).val('');
        }
        ;
        if (jQuery(this).val() == '')
            jQuery(this).val(jQuery(this).attr('alt'));
    });

    jQuery('#login input[type=password]').focus(function() {
        if (jQuery(this).hasClass('password') && jQuery(this).val() == '')
            jQuery(this).removeClass('password');
        if (jQuery(this).hasClass('password2') && jQuery(this).val() == '')
            jQuery(this).removeClass('password2');
    }).blur(function() {
        if (jQuery(this).hasClass('pass') && jQuery(this).val() == '') {
            jQuery(this).addClass('password');
            jQuery(this).val('');
        }
        ;
        if (jQuery(this).hasClass('pass2') && jQuery(this).val() == '') {
            jQuery(this).addClass('password2');
            jQuery(this).val('');
        }
        ;
    });

    jQuery('.contact_form').submit(function() {
        var good = true;
        jQuery('.text2', this).each(function() {
            if (jQuery(this).hasClass('required') && (jQuery(this).val() == '' || jQuery(this).val() == jQuery(this).attr('alt')))
            {
                jQuery(this).addClass('error');
                good = false;
            }
            else
                jQuery(this).removeClass('error');
        })

        return good;
    });
});	