import { defineComponent } from 'vue'
import { primaryToast, successToast, infoToast, warnToast, errorToast, whiteToast, blackToast } from '@/components'

export default defineComponent({
    setup() {

        return () => (
            <div class="p-10 flex flex-wrap gap-4">
                <KuiButton 
                    text="Toast"
                    onClick={() => {
                        primaryToast({
                            title: 'Title',
                            message: 'Message',
                        })

                        successToast({
                            title: 'Title',
                            message: 'Message',
                        })

                        infoToast({
                            title: 'Title',
                            message: 'Message',
                        })

                        warnToast({
                            title: 'Title',
                            message: 'Message',
                        })

                        errorToast({
                            title: 'Title',
                            message: 'Message',
                        })

                        whiteToast({
                            title: 'Title',
                            message: 'Message',
                        })

                        blackToast({
                            title: 'Title',
                            message: 'Message',
                        })
                    }}
                />
            </div>
        )
    },
})
