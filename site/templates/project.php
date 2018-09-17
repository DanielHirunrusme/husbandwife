<?php snippet('header') ?>



<main class="main page-template project-template" data-title="<?= $page->title() ?>" data-module-init="project" data-template="project" role="main">
  <div class="project-images">
    <div id="project-image-viewer" class="inner-project-images">
  <?php foreach($page->images()->sortBy('sort', 'asc') as $image): ?>
    <div class="project-image">
      <?php if (!detect()->isMobile()): ?>
      <a class="image-link" href="<?php echo $page->url() ?>">
        <img src="<?php echo $image->url() ?>" alt="<?php echo $page->title()->html() ?>" />
      </a>
      <?php else: ?>
        <img src="<?php echo $image->url() ?>" alt="<?php echo $page->title()->html() ?>" />
      <?php endif; ?>
    </div>
  <?php endforeach ?>
    </div>
  
    
  
  </div>
  
  <div class="project-text">
    <div class="text">
      <?= $page->text() ?>
    </div>
  </div>
  
  <ul class="project-nav">
    <?php if($page->hasPrevVisible()): ?>
    <li><a href="<?php echo $page->prevVisible()->url() ?>">
      Prev
      <div class="first-image">
        <img src="<?= $page->prevVisible()->images()->first()->url()?>" />
      </div>
    </a></li>
    <?php endif ?>
    
    <?php if($page->hasNextVisible()): ?>
    <li><a href="<?php echo $page->nextVisible()->url() ?>">
      Next
      <div class="first-image">
        <img src="<?= $page->nextVisible()->images()->first()->url()?>" />
      </div>
    </a></li>
    <?php endif ?>
  </ul>
  
 
  
</main>
<?php snippet('footer') ?>