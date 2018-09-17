<section class="project-section imageBanner">

  <?php if ($data->picture()->isNotEmpty()): ?>
  <img src="<?= $page->image($data->picture())->url() ?>" />
  <?php endif ?>
  
  <div class="project-section-text">
   <?php if ($data->text()->isNotEmpty()): ?>
     <?= $data->text()->text()->kt() ?>
   <?php endif ?>
  </div>
  
 </section>