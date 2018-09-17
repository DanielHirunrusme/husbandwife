<section class="project-section videoBanner" data-module-init="video">

  <?php if ($data->video()->isNotEmpty()): ?>
  
  <?= $data->video()->embed([
    'lazyvideo' => false,
    'autoplay' => true,
    'jsapi' => true
  ]) ?>
    
    
    
  <?php endif ?>
  
  <div class="project-section-text">
   <?php if ($data->text()->isNotEmpty()): ?>
     <?= $data->text()->text()->kt() ?>
   <?php endif ?>
  </div>
  
 </section>