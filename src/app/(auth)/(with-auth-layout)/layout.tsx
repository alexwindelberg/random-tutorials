export default function LayoutWithAuth({ children }: {children: React.ReactNode}) {


    return (<>
    <h2>This is a header for the auth layout </h2>
    {children}
    </>)
}