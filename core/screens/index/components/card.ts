export const zincCard = (content:string, customClass?:string, customAttributes?:string) => {

    return `
    <div class="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl backdrop-blur ${customClass}" ${customAttributes}>
        ${content}
        </div>
    `

};
