<template>
  <aside class="sl-sidebar">
    <div class="sl-sidebar-sticky">
                <div class="filter-heading s-m-b-32">
                  <div class="text-icon-wrapper">
                    <div class="schweigen-commercial-icons icon-left l c-t-primary-70"></div>
                    <div class="heading xs">Filters</div>
                  </div>
                </div>
                <div class="w-form">
                  <form id="email-form" name="email-form" data-name="Email Form" class="form">
                    <div class="input-icon-wrapper"><input type="text" class="input small icon-right w-input" maxlength="256"  v-on:input="updateNameFilter($event.target.value)" name="Filter-name" data-name="Filter-name" placeholder="Filter by name" id="Filter-name">
                      <div class="material-icons icon-input-right">search</div>
                    </div>
                  </form>
                  <div class="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div class="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
                <div class="filter-container">
                  <div class="filter-trigger"><img src="https://assets.website-files.com/6007b4af01b37638d431e8f4/601890cb6ba8ee57d7501a93_Filter-Plus.svg" loading="lazy" alt="" class="icon-image mini filter-trigger-icon filter-closed" style="display: none;"><img src="https://assets.website-files.com/6007b4af01b37638d431e8f4/601890cb6ba8ee0877501a94_Filter-Minus.svg" loading="lazy" alt="" class="icon-image mini filter-trigger-icon filter-open" style="display: block;">
                    <div class="filters-trigger-text">File Type</div>
                  </div>
                  <div class="filter-options filter-bar-category" style="display: block;"><a filter-by="Undermount" href="#" class="filter-option filter-button w-inline-block">
                      <div class="text-icon-wrapper">
                        <div class="schweigen-commercial-icons icon-left"></div>
                        <div class="button-text">CAD</div>
                      </div>
                    </a><a filter-by="Undermount" href="#" class="filter-option filter-button w-inline-block">
                      <div class="text-icon-wrapper">
                        <div class="schweigen-commercial-icons icon-left"></div>
                        <div class="button-text">PPT</div>
                      </div>
                    </a><a filter-by="Undermount" href="#" class="filter-option filter-button w-inline-block">
                      <div class="text-icon-wrapper">
                        <div class="schweigen-commercial-icons icon-left"></div>
                        <div class="button-text">3DS</div>
                      </div>
                    </a><a filter-by="Undermount" href="#" class="filter-option filter-button filter-active w-inline-block">
                      <div class="text-icon-wrapper">
                        <div class="schweigen-commercial-icons icon-left"></div>
                        <div class="button-text">PNG</div>
                      </div>
                    </a><a filter-by="Undermount" href="#" class="filter-option filter-button w-inline-block">
                      <div class="text-icon-wrapper">
                        <div class="schweigen-commercial-icons icon-left"></div>
                        <div class="button-text">Excel</div>
                      </div>
                    </a><a filter-by="Undermount" href="#" class="filter-option filter-button w-inline-block">
                      <div class="text-icon-wrapper">
                        <div class="schweigen-commercial-icons icon-left"></div>
                        <div class="button-text">PDF</div>
                      </div>
                    </a><a filter-by="Undermount" href="#" class="filter-option filter-button w-inline-block">
                      <div class="text-icon-wrapper">
                        <div class="schweigen-commercial-icons icon-left"></div>
                        <div class="button-text">DOC</div>
                      </div>
                    </a></div>
                </div>
                <div class="filter-container">
                  <div class="filter-trigger"><img src="https://assets.website-files.com/6007b4af01b37638d431e8f4/601890cb6ba8ee57d7501a93_Filter-Plus.svg" loading="lazy" alt="" class="icon-image mini filter-trigger-icon filter-closed" style="display: none;"><img src="https://assets.website-files.com/6007b4af01b37638d431e8f4/601890cb6ba8ee0877501a94_Filter-Minus.svg" loading="lazy" alt="" class="icon-image mini filter-trigger-icon filter-open" style="display: block;">
                    <div class="filters-trigger-text">TYPE</div>
                  </div>
                  <div class="filter-options filter-bar-category" style="display: block;"><a filter-by="Undermount" href="#" class="filter-option filter-button w-inline-block">
                      <div>Undermount</div>
                    </a><a filter-by="Wallmount" href="#" class="filter-option filter-button w-inline-block">
                      <div>Wallmount</div>
                    </a><a filter-by="Island" href="#" class="filter-option filter-button w-inline-block">
                      <div>Island</div>
                    </a><a filter-by="Ceiling Cassette" href="#" class="filter-option filter-button filter-active w-inline-block">
                      <div>Ceiling Cassette</div>
                    </a><a filter-by="BBQ Alfresco" href="#" class="filter-option filter-button w-inline-block">
                      <div>BBQ&nbsp;Alfresco</div>
                    </a><a filter-by="Silent Exhaust Fans" href="#" class="filter-option filter-button w-inline-block">
                      <div>Silent Exhaust Fans</div>
                    </a></div>
                </div>
              </div>

  </aside>
</template>

<script>
import Button from './atoms/Button.vue'

export default {

  name: 'Sidebar',
  components: {
    Button,
  },
  emits: ['sortBy','changeFilterByNameValue'],
  methods: {
    updateSort(event) {
      this.$emit('sortBy',event)
      // console.log(event)
    },
    updateNameFilter(value) {
      this.$emit('changeFilterByNameValue',value)
    }
  }
};
</script>

<style lang="css" scoped>
</style>
