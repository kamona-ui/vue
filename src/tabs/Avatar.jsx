import { defineComponent } from 'vue'
import { size, avatar_shapes } from '@/data.json'
import userAvatar from '@/assets/57622665.jpeg'

export default defineComponent({
    setup() {
        return () => (
            <div>
                {avatar_shapes.map(shape => (
                    <div class="p-10 flex gap-6">
                        {size.map((s) => (
                            <KuiAvatar
                                size={s}
                                shape={shape}
                                src={userAvatar}
                                alt="User Avatar"
                            />
                        ))}
                    </div>
                ))}
            </div>
        )
    } 
})