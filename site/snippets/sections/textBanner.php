<section class="project-section textBanner">
  <div class="project-section-text">
   <?php if ($data->text()->isNotEmpty()): ?>
     <?= $data->text()->text() ?>
   <?php endif ?>
 </div>
 </section>