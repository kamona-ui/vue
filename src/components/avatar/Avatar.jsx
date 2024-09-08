import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        shape: {
            type: String,
            default: 'rounded',
            validator(value) {
                return ['rounded', 'square', 'circle'].includes(value)
            },
        },
        size: {
            type: String,
            default: 'base',
            validator(value) {
                return ['sm', 'base', 'lg'].includes(value)
            },
        },
        src: String,
        alt: String,
    },

    setup(props) {
        const classes = [
            'object-fit',
            {
                'w-8 h-8': props.size == 'sm',
                'w-10 h-10': props.size == 'base',
                'w-12 h-12': props.size == 'lg',
            },
            {
                'rounded-md': props.shape == 'rounded',
                'rounded-full': props.shape == 'circle',
                'rounded-none': props.shape == 'square',
            },
        ]

        return () => <img class={classes} src={props.src} alt={props.alt} />
    },
})
