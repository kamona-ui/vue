import { defineComponent, onMounted, ref } from 'vue'
import flatpickr from 'flatpickr'
import Input from './Input'

export default defineComponent({
    props: {
        modelValue: String,

        options: {
            type: Object,
            required: false,
        },
    },

    emits: ['update:modelValue'],

    setup(props, { emit, attrs }) {
        const el = ref(null)

        onMounted(() => {
            if (el.value.$el) {
                flatpickr(el.value.$el, props.options)
            }
        })

        return () => (
            <Input
                value={props.modelValue}
                onInput={(e) => {
                    emit('update:modelValue', e.target.value)
                }}
                ref={el}
                {...attrs}
            />
        )
    },
})
