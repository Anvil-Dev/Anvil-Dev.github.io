<script setup lang="ts">
import { withBase } from 'vitepress'

const versions = ['21.1', '26.1']
</script>

<template>
  <main class="handbook">
    <section class="handbook-cover" aria-labelledby="handbook-title">
      <div class="handbook-intro">
        <h1 id="handbook-title"><span>AnvilCraft</span>开发者手册</h1>
        <p>为铁砧工艺编写附属模组、配方和资源包。选择项目使用的分支，查阅对应的接口与数据格式。</p>
        <div class="branch-links" aria-label="AnvilCraft 文档">
          <a v-for="version in versions" :key="version" :href="withBase('/anvilcraft/' + version + '/')">
            {{ version }} 文档 <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div class="drawing" aria-hidden="true">
        <div class="anvil">
          <i v-for="part in ['crown', 'shoulder', 'stem', 'foot']" :key="part" :class="part">
            <b class="front"></b><b class="top"></b><b class="right"></b>
          </i>
        </div>
      </div>
    </section>
    <section class="companion" aria-labelledby="ageratum-title">
      <div>
        <h2 id="ageratum-title">Ageratum</h2>
        <p>为模组编写游戏内手册，查阅文档格式与扩展接口。</p>
      </div>
      <div class="branch-links secondary" aria-label="Ageratum 文档">
        <a v-for="version in versions" :key="version" :href="withBase('/ageratum/' + version + '/')">
          {{ version }} 文档 <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  </main>
</template>
