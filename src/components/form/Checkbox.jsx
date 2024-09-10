import { defineComponent, ref } from 'vue'

export default defineComponent({
    props: {
        checked: {
            type: [Array, Boolean],
            default: false,
        },
        value: {
            default: null,
        },
    },

    emits: ['update:checked'],

    setup(props, { emit }) {
        const { value, checked } = props

        const isChecked = ref(checked)

        return () => (
            <input
                type="checkbox"
                class={[
                    'text-primary-500',
                    'border-gray-400',
                    'rounded',
                    'focus:border-primary-300 focus:ring focus:ring-primary-500',
                    'dark:border-gray-600',
                    'dark:bg-dark-eval-1',
                    'dark:focus:ring-offset-dark-eval-1',
                    'transform scale-125',
                ]}
                value={value}
                v-model={isChecked.value}
                onChange={() => {
                    emit('update:checked', isChecked.value)
                }}
            />
        )
    },
})
