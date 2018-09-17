<a class="logo home-link" href="<?php echo url() ?>">
  <?php echo $site->title()->html() ?><span class="project-title"> / <?= $page->title() ?></span></span>
</a>
  
<nav role="navigation">
  <ul class="menu cf">
    <?php $index = 1; ?>
    <?php foreach($pages->visible() as $p): ?>
    <li>
      <a class="nav-link no-barba <?php e($p->isOpen(), ' active') ?>" href="<?php echo $p->url() ?>" ><?php echo $p->title()->html() ?> </a>

      <?php /*if($p->hasVisibleChildren()): ?>
      <ul class="submenu">
        <?php foreach($p->children()->visible() as $p): ?>
        <li>
          <a href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a>
        </li>
        <?php endforeach ?>
      </ul>
      <?php endif */ ?>

    </li>
     <?php $index++; ?>
    <?php endforeach ?>
  </ul>

</nav>
