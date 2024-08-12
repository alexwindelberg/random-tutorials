
export default function DashboardLayouts({
    childern,
    users,
    revenue,
    notifications
}: {
    childern: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode
    notifications: React.ReactNode
}) {
    return (
        <>
            <div>{childern}</div>
            <div>
                {users}
            </div>
            <div>
                {revenue}
            </div>
            <div>
                {notifications}
            </div>
        </>
    )
}