import { defineComponent } from 'vue'
import userAvatar from '@/assets/57622665.jpeg'
import { positions, shapes, sizes } from '@/support'

export default defineComponent({
    setup() {
        const avatarShapes = shapes.filter((s) => s != 'pill')
        const avatarSizes = ['xs', ...sizes, 'xl', '2xl']

        return () => (
            <div>
                {avatarShapes.map((shape) => (
                    <div class="p-10 flex gap-6">
                        {avatarSizes.map((s) => (
                            <KuiAvatar
                                size={s}
                                shape={shape}
                                src={userAvatar}
                                alt="User Avatar"
                            />
                        ))}
                    </div>
                ))}

                {avatarShapes.map((shape) => (
                    <div class="p-10 flex gap-6">
                        {avatarSizes.map((s) => (
                            <KuiAvatar size={s} shape={shape} />
                        ))}
                    </div>
                ))}

                {avatarShapes.map((shape) => (
                    <div class="p-10 flex gap-6">
                        {avatarSizes.map((s) => (
                            <KuiAvatar
                                size={s}
                                shape={shape}
                                src={userAvatar}
                                alt="User Avatar"
                                bordered
                            />
                        ))}
                    </div>
                ))}

                {avatarShapes.map((shape) => (
                    <div class="p-10 flex gap-6">
                        {avatarSizes.map((s) => (
                            <KuiAvatar size={s} shape={shape} bordered />
                        ))}
                    </div>
                ))}

                {positions.map((p) => (
                    <div class="p-10 flex gap-6">
                        {avatarSizes.map((s) => (
                            <div class="flex gap-6">
                                <KuiAvatar
                                    size={s}
                                    bordered
                                    status-position={p}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        )
    },
})
