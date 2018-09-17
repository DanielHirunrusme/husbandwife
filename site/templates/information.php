<?php snippet('header') ?>
<main class="main page-template about-template" data-title="<?= $page->title() ?>" role="main" data-template="information">
  <div class="inner-main">
    <div class="text">
      <?= $page->text()->kt() ?>
    </div>
    <div class="clients">
      <h2>Select Clients</h2>
      <?= $page->clients()->kt() ?>
    </div>
    <div class="contact-info">
      <?= $page->contact()->kt() ?>
    </div>
  </div>
</main>
<?php snippet('footer') ?>