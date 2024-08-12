
export default function DashboardLayouts({
    childern,
    users,
    revenue,
    notifications,
    login
}: {
    childern: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode
    notifications: React.ReactNode,
    login: React.ReactNode
}) {

    const logedin = false;

    return logedin ?
        (<>
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
        </>) : (<div>{login}</div>)
}