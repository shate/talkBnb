<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");?><!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Lk</title>
<link href="css/main.css" rel="stylesheet" type="text/css">
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
<!--[if (gte IE 7)&(lte IE 8)]>
      <script type="text/javascript" src="js/selectivizr-min.js">
    /* pseudo elements support */
    </script>

    <script type="text/javascript">
    /* emulate HTML5 elements */
    var E  = ('article:aside:audio:canvas:figure:footer:header:hgroup:nav:section:video:output:detalis:keygen:meter:progress:figcaption:mark:summary:div class="time":wbr').split(':');
      for (var c = 0; c < E.length; c++) {
        document.createElement(E[c]);
      }
    </script>
    <link href="css/ie.css" rel="stylesheet" type="text/css">
     <![endif]-->
<script src="js/jquery-1.7.1.min.js"></script>
<script src="js/select.js"></script>
<script src="js/script.js"></script>
<script src="js/garlic.js"></script>

</head>

<body>
<div id="container" class="lk">
  <header>
    <div class="wrap">
      <article> <a href="/" class="ico-logo-lk">ЛОГО</a> <a href="/" class="ico-logo-lk-m">ЛОГО</a></article>
      <article class="cf">
        <div>
          <button type="button" class="navbar-toggle"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
          <nav>
            <ul class="header_nav">
<!--               <li><a href="#">What is Talkbnb?</a></li>
              <li><a href="#" class="show_form">Become a host</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#" class="login">Log in</a></li>
 -->            </ul>
          </nav>
        </div>
        <div class="cf">
        <p class="user">
        <img src="img/user.png" alt="">
        <?=$USER->GetFirstName()?></p></p>
        </div>
        <div class="cf">
          <div class="lang">
            <p class="select_lang" id="selected"> English <i class="ico-gb"></i> </p>
            <ul class="list_lang">
              <li>
                <p class="select_lang">French<i class="ico-fr"></i></p>
              </li>
              <li>
                <p class="select_lang">German<i class="ico-gm"></i></p>
              </li>
              <li>
                <p class="select_lang">Italian<i class="ico-it"></i></p>
              </li>
              <li>
                <p class="select_lang">Spanish<i class="ico-sp"></i></p>
              </li>
              <li>
                <p class="select_lang">Japanese<i class="ico-jp"></i></p>
              </li>
            </ul>
          </div>

        </div>
      </article>
    </div>
    <div class="dop-nav">
      <div class="wrap">
        <ul class="dop-list">
<!--           <li class="active"><a href="">Profile</a></li>
          <li><a href="support.html">Support</a></li>
          <li><a href="">Password settings</a></li> -->
        </ul>
      </div>
    </div>
  </header>
  <div class="content">

<?$APPLICATION->IncludeComponent(
  "talkbnb:profile.edit",
  "",
  Array(
    // "PROFILE" => "Y",
  )
);?>

</div>
</div>
<footer class="lk">
<div class="wrap">
  <article>
  <div class="contakts">
    <p class="phone"><i class="ico-phone-lk"></i>855-8-TALKBNB</p>
    <p class="mail"><i class="ico-mail-lk"></i><a href="mailto:hello@talkbnb.com">hello@talkbnb.com</a></p>
    </div>
  </article>
  <article>
    <div class="logo-wrap"> <i class="ico-logo-lk-footer"></i> </div>
    <nav>
      <ul class="footer_nav">
        <li><a href="/Privacy_policy.doc">Terms &amp; Conditions</a></li>
        <li><a href="/Privacy_policy.doc">Privacy Policy</a></li>
      </ul>
    </nav>
    <div class="copyright">&copy; 2015 Talkbnb</div>
  </article>
  <article>
    <ul class="soc_list">
    <li><a href="" class="icon-facebook"></a></li>
    <li><a href="" class="icon-instagram"></a></li>
    <li><a href="" class="icon-twitter"></a></li>
    <li><a href="" class="icon-gplus"></a></li>
    <li><a href="" class="icon-vk"></a></li>
  </ul>
  </article>
  </div>

</footer>
<div id="pop-up" class="poup">
  <div class="login-form-wrap">
    <div class="login-form"> <a href="" class="fb"><i class="icon-facebook"></i>Sign up with Facebook</a> <a href="" class="google"><i class="ico-google"></i>Sign up with Google</a> <a href="" class="mail"><i class="ico-mail-w"></i>Sign up with Email</a>
      <p class="chb last">Already have an account?<a href="" id="login">Log in</a></p>
    </div>
    <form action="" class="login-form">
      <input type="email" name=""  placeholder="" >
      </p>
      <p class="icon-lock-alt">
        <input type="password" name=""  placeholder="">
      </p>
      <p class="chb">
        <input  id="rem" type="checkbox" name="rem" value="Remember me">
        <label for="rem" class="checkbox">Remember me</label>
        <a href="">Forgot password?</a></p>
      <button type="submit">Log in</button>
    </form>
  </div>
</div>
</body>
</html>