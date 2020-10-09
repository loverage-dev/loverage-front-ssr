<template>
    <div class="a-category-menu">
    <ul class="a-category-menu__list">
        <li class="a-category-menu__list-item">
          <nuxt-link 
            @click.native.prevent="toSamePath('/category/出会い')"
            :to="{　path: encodeURI('/category/出会い')}"
            >
            出会い
          </nuxt-link>
        </li>
        <li class="a-category-menu__list-item">
          <nuxt-link 
            @click.native.prevent="toSamePath('/category/片想い')"
            :to="{　path: encodeURI('/category/片想い')}">
            片想い
          </nuxt-link>
        </li>
        <li class="a-category-menu__list-item">
          <nuxt-link 
            @click.native.prevent="toSamePath('/category/友達・同僚')"
            :to="{ path: encodeURI('/category/友達・同僚')}">
            友達・同僚
          </nuxt-link>
        </li>
        <li class="a-category-menu__list-item">
          <nuxt-link 
            @click.native.prevent="toSamePath('/category/デート')"
            :to="{ path: encodeURI('/category/デート')}">
            デート
          </nuxt-link>
        </li>
        <li class="a-category-menu__list-item">
          <nuxt-link 
            :to="{ path: encodeURI('/category/告白')}"
            @click.native.prevent="toSamePath('/category/告白')">
            告白
          </nuxt-link>
        </li>
        <li class="a-category-menu__list-item">
          <nuxt-link
            @click.native.prevent="toSamePath('/category/彼氏・彼女')"
            :to="{ path: encodeURI('/category/彼氏・彼女')}">
            彼氏・彼女
          </nuxt-link>
        </li>
        <li class="a-category-menu__list-item">
          <nuxt-link 
            @click.native.prevent="toSamePath('/category/元カレ・元カノ')"
            :to="{　path: encodeURI('/category/元カレ・元カノ')}">
            元カレ・元カノ
          </nuxt-link>
          </li>
        <li class="a-category-menu__list-item">
          <nuxt-link 
            @click.native.prevent="toSamePath('/category/結婚')"
            :to="{ path: encodeURI('/category/結婚')}">
            結婚
          </nuxt-link>
        </li>
        <li class="a-category-menu__list-item">
          <nuxt-link 
            @click.native.prevent="toSamePath('/category/結婚生活')"
            :to="{ path: encodeURI('/category/結婚生活')}">
            結婚生活
          </nuxt-link>
        </li>
        <li class="a-category-menu__list-item">
          <nuxt-link
            @click.native.prevent="toSamePath('/category/別れ')" 
            :to="{ path: encodeURI('/category/別れ')}">
            別れ
          </nuxt-link>
        </li>
        <li class="a-category-menu__list-item">
          <nuxt-link 
            @click.native.prevent="toSamePath('/category/浮気・不倫')"
            :to="{ path: encodeURI('/category/浮気・不倫')}">
            浮気・不倫
          </nuxt-link>
        </li>
        <li class="a-category-menu__list-item">
          <nuxt-link 
            @click.native.prevent="toSamePath('/category/失恋')"
            :to="{　path: encodeURI('/category/失恋')}">
            失恋
          </nuxt-link>
        </li>
        <li class="a-category-menu__list-item">
          <nuxt-link 
            @click.native.prevent="toSamePath('/category/SEX・性')"
            :to="{ path: encodeURI('/category/SEX・性')}">
            SEX・性
          </nuxt-link>
        </li>
        <li class="a-category-menu__list-item">
          <nuxt-link 
            @click.native.prevent="toSamePath('/category/その他')"
            :to="{ path: encodeURI('/category/その他')}">
            その他
          </nuxt-link>
        </li>
    </ul>
    </div>
</template>

<script>
export default {
  name: "CategoryMenu",
  props: {},
  created: function(){
    },
  mounted: function(){
  },
  destroyed: function(){
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
