<section class="project-section paragraph">
  <div class="project-section-text">
   <?php if ($data->text()->isNotEmpty()): ?>
     <?= $data->text()->text()->kt() ?>
   <?php endif ?>
  </div>
 </section>