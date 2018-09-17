<section class="project-section singleImage">

  <?php if ($data->picture()->isNotEmpty()): ?>
  <img src="<?= $page->image()->find($data->picture())->url() ?>" />
  <?php endif ?>
  
  <div class="project-section-text">
   <?php if ($data->text()->isNotEmpty()): ?>
     <?= $data->text()->text()->kt() ?>
   <?php endif ?>
  </div>
 </section>