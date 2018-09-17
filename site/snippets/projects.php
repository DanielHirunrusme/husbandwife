<?php 


$limit = 100; 

if($page->template() == 'home') {
	$limit = 9;
} 

?>

<div class="teaser cf grid" data-module-init="project-grid">
  <?php foreach(page('work')->children()->visible()->limit($limit) as $project): ?>
  <div class="grid-item">
    <div class="inner-grid-item">
    
    <?php if($image = $project->images()->sortBy('sort', 'asc')->first()): ?>
    <a class="image-link" href="<?php echo $project->url() ?>">
      <img src="<?php echo $image->url() ?>" alt="<?php echo $project->title()->html() ?>" >
      
     
      
    </a>
    <?php endif ?>
	<p><a href="<?php echo $project->url() ?>"><?php echo $project->title()->html() ?> </a></p>
  <h3><?php echo $project->subtitle()->html() ?></h3>
	<!--
    <h3><a href="<?php echo $project->url() ?>"><?php echo $project->title()->html() ?></a></h3>
    <p><?php echo $project->text()->excerpt(80) ?> <a href="<?php echo $project->url() ?>" class="read-more">View&nbsp;Project&nbsp;→</a></p>
	-->
  </div>
</div>
  <?php endforeach ?>
</div> 


