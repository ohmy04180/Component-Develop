import {ref} from "vue";
import type {PaginationProps} from "../common/interfaces/props/Pagination.interface";

interface PaginationComposition extends PaginationProps {
    paginationTotalCount: Ref<number>,
    currentPage: Ref<number>,
    paginationList: Ref<number[]>,
    calculatedPaginationList: Ref<number[]>,
    movePage: (value: number) => void,
    onChange: (value: number) => void
}

export function PaginationComposition(
    props: PaginationProps,
    onchange: (page: number) => void
): PaginationComposition {
    const paginationTotalCount: Ref<number> = ref<number>(Math.ceil(props.totalCount / props.perPage));
    const currentPage: Ref<number> = ref<number>(props.currentPage);
    const paginationList: Ref<Array<number>> = ref(Array.from({length: paginationTotalCount.value}, (_, i) => i + 1));

    const calculatedPaginationList = computed(() => {
        const currentCnt = currentPage.value;
        const totalCnt = paginationTotalCount.value;

        if (currentCnt < 5) {
            return paginationList.value.slice(2, 5);
        } else if (currentCnt >= 5 && currentCnt < totalCnt - 3) {
            return paginationList.value.slice(currentCnt - 2, currentCnt + 1);
        } else {
            return paginationList.value.slice(totalCnt - 5, totalCnt - 2);
        }
    });

    const onChange: (page: number) => void = (page) => {
        onchange(page);
    }

    const movePage: (page: number) => void = (page) => {
        console.log('page', page)
        currentPage.value = page;
        onChange(page);
    }

    return {...props, paginationTotalCount, paginationList, onChange, movePage, calculatedPaginationList}
}