<section class="project-section imageWithText" style="display:flex;">
  
  <div class="img" style="width:50%; height:Auto; margin-right:1em;">
  <?php if ($data->picture()->isNotEmpty()): ?>
  <img style="" src="<?= $page->image($data->picture())->url() ?>" />
  <?php endif ?>
</div>
  <div class="project-section-text">
   <?php if ($data->text()->isNotEmpty()): ?>
     <?= $data->text()->text() ?>
   <?php endif ?>
 </div>
 </section>