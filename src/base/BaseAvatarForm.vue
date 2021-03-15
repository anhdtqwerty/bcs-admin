<template>
  <div>
    <div class="flex-row justify-center">
      <picture-input
        ref="pictureInput"
        width="120"
        height="120"
        radius="50"
        margin="20"
        accept="image/jpeg,image/png"
        size="3"
        button-class="btn"
        :prefill="avatar"
        :custom-strings="{upload: '<h1>Bummer!</h1>', drag: 'Upload'}"
        @change="onChange"
      >
      </picture-input>
    </div>
  </div>
</template>

<script>
import PictureInput from 'vue-picture-input'
import imageCompression from 'browser-image-compression'
import {mapActions} from 'vuex'
import _ from 'lodash'

export default {
  components: {
    PictureInput,
  },
  props: {
    pool: {
      type: [Object],
      required: true,
      default: () => {},
    },
  },
  data: () => ({
    valid: true,
    image: '',
  }),
  computed: {
    avatar() {
      return _.get(this.pool, 'avatar.url', '/default-avatar.png')
    },
  },
  methods: {
    ...mapActions('upload', ['upload', 'destroy']),
    async onChange(image) {
      if (image) {
        this.save(this.$refs.pictureInput.file)
      }
    },
    async save(image) {
      if (this.pool.avatar) this.destroy(this.pool.avatar.id)
      let formData = new FormData()
      formData.append('files', image)
      const avt = await this.upload(formData)
      console.log(avt)
      this.$emit('change', avt)
    },
    cancel() {
      this.image = this.pool.avatar
      this.$emit('cancel')
    },
    async compress(image) {
      const options = {
        maxSizeMB: 0.02,
        maxWidthOrHeight: 200,
        useWebWorker: true,
      }
      return imageCompression(image, options)
    },
  },
  created() {
    this.image = this.pool.avatar || ''
  },
  watch: {
    pool(pool) {
      this.image = pool.avatar
    },
  },
}
</script>
