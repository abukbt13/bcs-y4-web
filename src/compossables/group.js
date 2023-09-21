import axios from "axios";
import {auth} from "@/compossables/auth";
import {ref} from "vue";
const {base_url , authHeader}=auth()

export function group(){

    const groups = ref([])
    const group_name = ref('')
    const group_description = ref('')
    const group_category = ref('')

    const create_group = async () =>{

        const formData = new FormData()
        formData.append('group_name',group_name.value)
        formData.append('group_description',group_description.value)
        formData.append('group_category',group_category.value)
        const response = await axios.post(base_url.value+'group/create', formData,authHeader);
    }

    const showGroup = async () =>{
        const res = await axios.get(base_url.value+'group/show')
        groups.value =res.data.group
    }
    return {
        create_group,group_name,group_category,group_description,showGroup,groups
    }
}