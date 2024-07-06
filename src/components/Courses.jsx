import React, { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../Config";
import { CategoryIDContext } from "../context";
export default () => {
    const [categories, setCategories] = useState([]);
    const [courses, setCourses] = useState([]);
    const { categoryId, setCategoryId } = useContext(CategoryIDContext);

    useEffect(() => {
        fetch(`${BASE_URL}/categories`)
            .then(res => res.json())
            .then(res => {
                setCategories([
                    {
                        "id": 0,
                        "name": "All Programs",
                    },
                    ...res.data
                ]);
            })
    }, []);

    useEffect(() => {
        console.log('Working');
        let query = `${BASE_URL}/courses`;
        if(categoryId != 0) {
            query = query.concat(`?categoryId=${categoryId}`);
        }
        fetch(query)
            .then(res => res.json())
            .then(res => {
                setCourses(res.data);
            });
    }, [categoryId]);

    return (
        <div className="mt-10 flex mx-auto w-3/5">
            <div className="w-1/5 m-4 p-4">
                {
                    categories.map(category => {
                        return (
                            <div key={`category-${ category.id }`} className="p-2 bg-gray-300 hover:bg-gray-600
                                hover:text-white hover:cursor-pointer" onClick={() => setCategoryId(category.id)}>{category.name}</div>
                        );
                    })
                }
            </div>
            <div className="w-4/5 m-4 p-4">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Program
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Referrer Bonus
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Referee Bonus
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                courses.map(course => {
                                    return (
                                        <tr key={`course-${course.id}`} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex gap-3 items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                                    </svg>
                                                    { course.title }
                                                </div>
                                            </th>
                                            <td className="px-6 py-4">
                                                ₹ { course.referrerBonus }
                                            </td>
                                            <td className="px-6 py-4">
                                                ₹ { course.refereeBonus }
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}