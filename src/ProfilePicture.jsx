function ProfilePicture(){


    const imageUrl='https://imgs.search.brave.com/gA6neL0iOucuxbXEXiZBB8e40cYy5ZqMsf5VCmQmwwA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hcmNo/aXZlLnNtYXNoaW5n/Lm1lZGlhL2Fzc2V0/cy8zNDRkYmY4OC1m/ZGY5LTQyYmItYWRi/NC00NmYwMWVlZGQ2/MjkvMDZjOTY4ODct/OWUwMS00Mjg5LWFi/ODEtY2RkNGVhMzgx/ODNjL21lYXN1cmlu/Zy1pbWFnZS1zaXpl/LnBuZw';

    const hendleClick = (e) => e.target.style.display ="none";//here it will disapeare

    return (<img onClick={(e) => hendleClick(e)} src={imageUrl}></img>)
}
export default ProfilePicture



// return (<ProfilePicture />);