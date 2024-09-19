import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        width: {
            type: String,
            default: 'w-6'
        },
        fgColor: {
            type: String,
            default: 'white'
        },
        bgColor: {
            type: String,
            default: 'white'
        },
    },

    setup(props) {
        return () => (
            <div class="flex items-center justify-center min-w-max">
                <div
                    style={{
                        '--loading-fg-color': props.fgColor,
                        '--loading-bg-color': props.bgColor,
                        '--loading-fg-mask': '#000 0 36deg, #0000 0 72deg',
                        '--loading-bg-mask': '#0000 0 36deg, #000 0 72deg',
                    }}
                    class={[
                        'grid aspect-square', 
                        props.width
                    ]}
                >
                    <div 
                        class={[
                            'col-[1/1] row-[1/1] rounded-[50%]',
                            'animate-rotate',
                            'bg-[repeating-radial-gradient(farthest-side,#0000_0%,var(--loading-fg-color)_1%_10%,#0000_11%_30%)]',
                            '[mask:repeating-conic-gradient(var(--loading-fg-mask))]',
                        ]}
                    >
                    </div>
                    <div 
                        class={[
                            'col-[1/1] row-[1/1] rounded-[50%]',
                            'animate-rotate-reverse',
                            'bg-[repeating-radial-gradient(farthest-side,#0000_0%,var(--loading-bg-color)_1%_10%,#0000_11%_30%)]',
                            '[mask:repeating-conic-gradient(var(--loading-bg-mask))]'
                        ]}
                    >
                    </div>
                </div>
            </div>
        )
    }
})
