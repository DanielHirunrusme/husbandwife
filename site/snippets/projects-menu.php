<?php 


$limit = 100; 
$imageIndex = 0;
?>


<div class="projects-menu" data-module-init="projects-menu">
  
  <ul>
    
    <?php foreach(page('work')->children()->visible()->limit($limit) as $project): ?>
    <li class="menu-item"><a class="menu-link" href="<?php echo $project->url() ?>">
      
      <?php if(count($project->images())>0): ?>
      <div class="nav-image"><img src="<?= $project->images()->first()->url() ?>" alt="<?= $project->title() ?>"></div>
      <?php endif; ?>
      
      <?= $project->title() ?>
    
    </a></li>
    <?php endforeach ?>
  </ul>
</div>

<div class="teaser projects-menu-images" data-module-init="project-grid">
  <?php foreach(page('work')->children()->visible()->limit($limit) as $project): ?>
    <?php if(!$project->coverimage()->empty()):?>
      <a class="image-link" href="<?php echo $project->url() ?>">
        <?php
          $img = $project->images()->find($project->coverimage());
        ?>
        <img src="<?php echo $img->url() ?>" alt="<?php echo $project->title()->html() ?>" />
      </a>
    <?php else: ?>
      <?php if($image = $project->images()->sortBy('sort', 'asc')->first()): ?>
      <a class="image-link" href="<?php echo $project->url() ?>">
        <img src="<?php echo $image->url() ?>" alt="<?php echo $project->title()->html() ?>" />
      </a>
    <?php endif; ?>
    <?php $imageIndex++; ?>
    <?php endif ?>
  <?php endforeach ?>
</div>
