import { defineComponent } from 'vue'
import { sizes, variants } from '@/support'

export default defineComponent({
    setup() {
        const types = ["filled", "outline"]
        const buttonVariants = [...variants, 'link', 'transparent']

        return () => (
            <div>
                <div class="p-10 flex flex-col gap-6">
                    {types.map((t) => (
                        <>
                            {sizes.map((s) => (
                                <>
                                    {buttonVariants.map((v) => (
                                        <div class="flex flex-col gap-2">
                                            <KuiButtonGroup
                                                outline={t == 'outline'}
                                                size={s}
                                                variant={v}
                                            >
                                                <button>Test</button>
                                                <button>Test</button>
                                                <button>Test</button>
                                                <button>Test</button>
                                            </KuiButtonGroup>
                                        </div>
                                    ))}
                                </>
                            ))}
                        </>
                    ))}
                </div>
            </div>
        )
    },
})
