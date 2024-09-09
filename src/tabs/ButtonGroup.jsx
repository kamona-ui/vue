import { defineComponent } from 'vue'
import { types, size, variants } from '@/data.json'

export default defineComponent({
    setup() {
        return () => (
            <div>
                <div class="p-10 flex flex-col gap-6">
                    {types.map((t) => (
                        <>
                            {size.map((s) => (
                                <>
                                    {variants.map((v) => (
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
