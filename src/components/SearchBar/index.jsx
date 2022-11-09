import { useDispatch, useSelector } from "react-redux";
import { setPokemonFilter } from "@/actions";


export const SearchBar = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    const applyfilter = (e) => {
        dispatch(setPokemonFilter(e.target.value));
    }

    return (
        <div className="mx-auto max-w-[600px] my-12 text-center">
            {/* <input onChange={applyfilter} type="search" placeholder="Search..." className="outline-none h-12 border px-4 min-w-[300px]" /> */}
            <div class="flex items-center">   
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input onChange={applyfilter} defaultValue={filter} type="text" id="simple-search" class="outline-rose-600 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                </div>
                <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-rose-600 rounded-md border focus:ring-4 focus:outline-none">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span class="sr-only">Search</span>
                </button>
        </div>
        </div>
    )
}