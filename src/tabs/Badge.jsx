import { defineComponent } from 'vue'
import userAvatar from '@/assets/57622665.jpeg'

export default defineComponent({
    setup() {
        return () => (
            <div class="p-10 space-y-6">
                <div class="flex gap-4">
                    <KuiBadge count={2} position="tl">
                        <KuiAvatar src={userAvatar} alt="User Avatar" />
                    </KuiBadge>

                    <KuiBadge count={2} variant="success">
                        <KuiAvatar src={userAvatar} alt="User Avatar" />
                    </KuiBadge>
                </div>

                <div class="flex gap-4">
                    <KuiDot />
                    <KuiDot variant="success" />
                    <KuiDot variant="warning" />
                </div>
            </div>
        )
    },
})
