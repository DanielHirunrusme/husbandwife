<!DOCTYPE html>
<html lang="en" <?php if (detect()->isMobile()): ?>class="mobile"<?php endif; ?>>
<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0, user-scalable=no">

  <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
  <meta name="description" content="<?php echo $site->description()->html() ?>">
  <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">
  
  
  <!-- CSS -->
  <?= css('assets/plugins/embed/css/embed.css') ?>
  <?php echo css('assets/main.min.css') ?>

</head>
<body data-module-init="body" class="<?php echo $page->template(); ?>">

  <?php snippet('menu') ?>
  <?php snippet('projects-menu') ?>
  
  <aside>
    <div class="counter" style="display:none;"><span class="current">1</span>/<span class="total"><?= count($page->images()); ?></span></div>
    <button class="to-text">Text</button>
    <button class="to-top">Top</button>
  </aside>
  
  <div class="project-title-aside">
    <h1><a href="<?= $site->url() ?>"><?= $site->title() ?> <span class="project-title">/ <?= $page->title() ?></span></a></h1>
  </div>
  
  <div id="barba-wrapper">
    <div class="barba-container">
  

