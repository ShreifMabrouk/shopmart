import CategoryDetails from "@/app/_components/categoryDetails/CategoryDetails"

export default async function categoryDetailaPage({params}:{params:Promise<{id:string}>}) {

    const { id } = await params
    
    return <CategoryDetails categoryId={id} />
}