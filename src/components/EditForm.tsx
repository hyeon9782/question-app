const EditForm = () => {
  return (
    <div>
      <form>
        <label htmlFor="">질문</label>
        <input type="text" name="question" placeholder="질문을 입력해주세요." />
        <input type="text" name="example" placeholder="보기를 입력해주세요." />
      </form>
    </div>
  );
};

export default EditForm;
