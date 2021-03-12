<template>
  <div class="pk__swap-form__wrapper d-inline-block">
    <div class="pk__swap-form white rounded-xl elevation-2">
      <div class="pk__swap-form__head d-flex justify-space-between">
        <div class="pk__swap-form__head-title pa-4 d-flex align-center">
          <span class="text-subtitle-1 font-weight-medium grey--text text--darken-3">Swap</span>
        </div>
        <div class="pk__swap-form__head-action pa-4 d-flex align-center">
          <v-btn icon small color="grey darken-2"
            ><v-icon color="grey darken-3">mdi-cog</v-icon></v-btn
          >
        </div>
      </div>
      <div class="pk__swap-form__content pa-4 pt-0">
        <div class="pk__swap-form__input-wrapper pa-4 pb-0 mb-2 rounded-xl">
          <div class="pk__swap-form__title"><span class="text-body-2">From</span></div>
          <div class="pk__swap-form__input-line d-flex justify-space-between mt-n3">
            <div class="pk__swap-form__number d-flex align-center pr-2">
              <v-text-field single-line placeholder="0.0"></v-text-field>
            </div>
            <div class="pk__swap-form__token d-flex align-center">
              <v-btn text>
                <v-img
                  max-height="24"
                  max-width="24"
                  src="data:image/png;base64,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"
                  class="mr-2"
                ></v-img>
                <span class="text-body-1">ETH</span>
                <v-icon color="grey darken-3">mdi-chevron-down</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
        <div class="text-center">
          <v-icon :color="hasCompletedInputs ? `deep-orange` : `grey darken-3`">
            mdi-arrow-down
          </v-icon>
        </div>
        <div class="pk__swap-form__input-wrapper pa-4 pb-0 mt-2 rounded-xl">
          <div class="pk__swap-form__title"><span class="text-body-2">To</span></div>
          <div class="pk__swap-form__input-line d-flex justify-space-between mt-n3">
            <div class="pk__swap-form__number d-flex align-center pr-2">
              <v-text-field single-line placeholder="0.0"></v-text-field>
            </div>
            <div class="pk__swap-form__token d-flex align-center">
              <v-btn depressed>
                <span class="text-body-2">Select a token</span>
                <v-icon color="grey darken-3">mdi-chevron-down</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
        <div
          class="pk__swap-form__ref-infos mt-4 d-flex justify-space-between"
          v-if="hasCompletedInputs"
        >
          <div class="pk__swap-form__title"><span class="text-body-2">Price</span></div>
          <div class="pk__swap-form__info">
            <span class="text-body-2">0.235876 ETH per AAVE</span>
            <v-btn icon x-small><v-icon color="grey darken-2">mdi-swap-horizontal</v-icon></v-btn>
          </div>
        </div>
        <div class="pk__swap-action-wrapper mt-4">
          <v-btn class="pk__primary-button" block depressed rounded color="amber"
            >Connect Wallet</v-btn
          >
        </div>
      </div>

      <div class="pk__swap-form__extra-wrapper" v-if="hasCompletedInputs">
        <div class="pk__swap-form__extra pa-4 pt-6 mt-n2 ml-2 mr-2 white rounded-b-xl elevation-1">
          <div class="d-flex justify-space-between">
            <div class="pk__swap-form__title">
              <span class="text-body-2 grey--text">Minimum received</span>
              <v-btn icon x-small color="grey"><v-icon>mdi-help-circle-outline</v-icon></v-btn>
            </div>
            <div class="pk__swap-form__info">
              <span class="text-body-2">0.4215 AAVE</span>
            </div>
          </div>
          <div class="d-flex justify-space-between">
            <div class="pk__swap-form__title">
              <span class="text-body-2 grey--text">Price Impact</span>
              <v-btn icon x-small color="grey"><v-icon>mdi-help-circle-outline</v-icon></v-btn>
            </div>
            <div class="pk__swap-form__info">
              <span class="text-body-2 green--text"> &lt; 0.01%</span>
            </div>
          </div>
          <div class="d-flex justify-space-between">
            <div class="pk__swap-form__title">
              <span class="text-body-2 grey--text">Liquidity Provider Fee</span>
              <v-btn icon x-small color="grey"><v-icon>mdi-help-circle-outline</v-icon></v-btn>
            </div>
            <div class="pk__swap-form__info">
              <span class="text-body-2">0.0003 ETH</span>
            </div>
          </div>
          <!--v-btn block depressed outlined class="pk__outlined-button mt-4">
            <span class="text-body-2">View pair analytics</span>
            <v-icon color="grey darken-3" size="16">mdi-arrow-top-right</v-icon>
          </v-btn-->
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.pk__swap-form__wrapper {
  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 100%;
  width: calc(100% - 12px * 2);
  max-width: 420px;
  .pk__swap-form {
    border: 1px solid #eee;
    position: relative;
    z-index: initial;
    .pk__swap-form__content {
      position: relative;
      z-index: 1;
      .pk__swap-form__input-wrapper {
        border: 1px solid #eee;
        .pk__swap-form__number {
          width: 0;
          flex: 1 1 auto;
          overflow: hidden;
        }
        .v-btn {
          padding-left: 12px !important;
          padding-right: 8px !important;
          border-radius: 12px !important;
        }
      }
    }
    .pk__swap-form__extra-wrapper {
      position: absolute;
      top: 100%;
      z-index: -1;
      width: 100%;
    }
  }
  .v-btn {
    text-transform: none !important;
    &.pk__primary-button {
      &:before {
        background: #fff !important;
      }
      &:hover {
        &:before {
          opacity: 0.1 !important;
        }
      }
      .v-ripple__container {
        color: #fff;
      }
    }
    &.pk__outlined-button {
      border: 1px solid #ddd !important;
    }
  }
}
</style>
<script>
export default {
  name: "BCSSwapForm",
  status: "ready",
  release: "1.0.0",
  data() {
    return {
      hasCompletedInputs: true,
      rulesForNumberInput: [
        value => !!value || "Required.",
        value => (value || "").length <= 20 || "Max 20 characters",
      ],
    }
  },
  props: {},
  watch: {},
  methods: {},
}
</script>
