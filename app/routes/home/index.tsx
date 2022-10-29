export default function Home() {
    return(

        <ul className="flex justify-center border-b">
            <li className="-mb-px mr-2">
                <a className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
                   href="#table">Table</a>
            </li>
            <li className="mr-2">
                <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                   href="#radar">Radar</a>
            </li>
            <li className="mr-2">
                <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                   href="#">something</a>
            </li>

        </ul>
    );
}