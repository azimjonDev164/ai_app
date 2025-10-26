import { useState } from "react";
import axios from "axios";
import API from "../services/api";

function AIAssistant() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await API.post("/ai", { text });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🍓 AI Production Planner</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          className="p-3 border rounded-lg"
          placeholder="Example: I have 200 kg apples, 100 kg sugar, each jam uses 0.5 kg apples and 0.2 kg sugar..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Thinking..." : "Generate Plan"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-3">{error}</p>}

      {result && (
        <div className="bg-gray-100 p-4 rounded-lg mt-6">
          <h2 className="text-lg font-semibold">AI Result:</h2>
          <pre className="whitespace-pre-wrap text-sm mt-2">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui blanditiis
        repellat quo voluptatem excepturi saepe illum dolor, perferendis nisi
        doloribus repudiandae harum. Ratione obcaecati minima iure non iste
        animi perspiciatis modi sunt nobis, alias quisquam mollitia vitae totam
        labore in sint, vero doloribus corporis ab! Expedita, nihil? Tempora
        obcaecati rerum corporis eaque sit magnam qui dicta incidunt neque
        saepe, ipsam sint blanditiis illo quis facilis ipsum omnis velit iste
        voluptates culpa cum earum. Saepe accusantium corporis sint nemo
        voluptatem pariatur illo dolores, tempora totam eligendi itaque tempore
        cumque. Facere aliquid maiores possimus est dolor ipsum ipsam. Iure
        dicta impedit voluptates ipsum nesciunt inventore ut itaque eius, iusto,
        laborum cumque. Error sapiente at voluptate sint tempora amet quae vitae
        nisi harum. Necessitatibus commodi neque hic repellat error unde sit
        dicta, quia distinctio vero suscipit ipsum maxime id alias eligendi
        libero expedita quidem. Nisi est error veniam ipsa, vitae repudiandae a
        provident quam temporibus dolorem, doloribus possimus, perferendis
        dolorum consequuntur rem pariatur tempore sequi ullam assumenda maiores
        velit! Ab possimus tenetur fugit, voluptas dolore, deleniti quas officia
        dolores facilis molestias hic, culpa cum doloribus totam? Cupiditate
        iure natus unde obcaecati, quis, labore nesciunt repudiandae nostrum ad,
        dolor placeat ducimus sapiente! Aut ipsam obcaecati, mollitia dolores
        debitis veniam quae reiciendis? Ea consequuntur corrupti provident eos.
        Eius sint voluptatum quae autem! Temporibus impedit nemo exercitationem
        quas hic quidem inventore ab sunt quae esse sed delectus vel laboriosam
        aliquid consectetur, ad odit, corrupti laudantium cum quos aut assumenda
        velit. Eaque magni cum voluptatem praesentium necessitatibus quo est
        recusandae facere harum. Accusamus quos impedit, ut eos laboriosam
        nesciunt quo dolores eligendi ducimus magni soluta temporibus ipsum
        aspernatur tempora facilis qui earum laudantium distinctio repellat.
        Quos consectetur corrupti hic deleniti vel, minus quis provident illo
        maiores molestiae repellendus quas, ullam doloribus. Expedita
        reprehenderit sequi animi quam dolorum error, dolores cumque officiis.
        Odit voluptatum dolore, blanditiis dolorem dolorum delectus sapiente
        error, sunt nobis, tenetur enim accusantium aperiam. Deleniti reiciendis
        iusto provident enim quis itaque aspernatur voluptatibus, repudiandae
        sapiente totam quo maxime delectus, perferendis veritatis, tempore
        incidunt odio in mollitia numquam expedita doloremque! Consequuntur
        aperiam aut praesentium saepe omnis iure dolor officiis ad pariatur
        adipisci reprehenderit alias, recusandae necessitatibus earum sint
        aspernatur fugiat ratione modi dicta voluptatum. Voluptate, ipsam.
        Commodi, autem inventore asperiores placeat aspernatur reiciendis fugit
        expedita ea est dicta nemo? Rem, quidem maiores eius voluptates
        repudiandae itaque tempora laudantium vel labore consequatur perferendis
        esse incidunt est eligendi facilis velit dolorem laboriosam blanditiis
        illum porro eum! Numquam ipsam voluptatum tenetur quis unde et soluta
        doloremque ad. Ducimus similique voluptatem sunt ad consequatur eum
        maiores blanditiis porro aspernatur, animi pariatur, facilis mollitia
        harum officiis! Accusantium odit iusto adipisci asperiores assumenda
        temporibus harum fugiat quas quam dolores perspiciatis atque
        voluptatibus, saepe at, omnis praesentium, ipsum corporis architecto!
        Perspiciatis quo iste corporis similique quam enim. Optio neque deserunt
        sunt quaerat odit ut tempore in eveniet adipisci? Quisquam cupiditate
        explicabo fugit voluptatum reprehenderit ipsa cum ad exercitationem fuga
        dolore aspernatur placeat ipsam tempore deserunt qui autem repudiandae,
        quidem officiis facere eveniet voluptatibus nisi eum? Possimus, suscipit
        optio? Ullam, libero quasi. Commodi reprehenderit facilis, mollitia sit
        doloribus omnis exercitationem impedit assumenda itaque maxime
        temporibus eaque earum obcaecati aliquid ratione, laudantium
        voluptatibus voluptatum expedita eius deserunt pariatur ea aut corporis.
        Culpa deserunt atque repellendus, corrupti excepturi sed incidunt
        reprehenderit iure odio blanditiis dolor at ad voluptatibus rem ea
        cumque commodi iste ipsum quos assumenda quas amet quasi esse. Dicta
        repellendus quos fugiat, quis reiciendis fugit voluptates non ullam
        quasi a quisquam possimus quidem quae delectus recusandae neque, totam
        natus iusto sequi expedita assumenda temporibus rem necessitatibus. Vel
        dicta quas nisi ad atque numquam provident? Praesentium voluptatibus
        dolorum nobis alias commodi nam ex debitis sequi aliquam voluptate atque
        sit aliquid corrupti eius natus, magnam minima quasi. Voluptate aliquid
        veniam quas earum consectetur quos, dolorum quae accusantium amet
        assumenda mollitia aspernatur impedit reprehenderit id quo tempora ullam
        placeat architecto culpa exercitationem dolorem. Commodi non quia rem
        accusantium, quisquam similique aliquid saepe consequatur nisi culpa ut
        cupiditate tempore fuga delectus perferendis magnam temporibus illum at.
        Culpa quae suscipit neque accusamus, natus dignissimos dolor a velit
        odit eum quisquam repudiandae deserunt corporis nobis esse cum,
        laboriosam rerum earum? Sint cupiditate, voluptates iure nisi alias,
        praesentium architecto et enim voluptatibus, eius nam aliquid animi
        laudantium dolores ullam veniam aliquam laborum? Reprehenderit
        repudiandae quasi ducimus nisi velit accusamus? Nostrum, ea nisi autem
        quod quia eveniet nesciunt minima soluta, culpa voluptates nemo
        praesentium error quibusdam consequuntur nobis possimus atque molestias?
        Dolor soluta quis ab, temporibus perspiciatis molestias fugit, enim
        necessitatibus consectetur deserunt totam sunt fuga consequuntur nihil
        rem quisquam vel quaerat eum distinctio neque nostrum! Odio expedita
        saepe quia ab ipsam similique sunt minima ut quod qui aperiam possimus
        tempora eveniet sed maiores dolores, repellat fuga odit porro? Incidunt,
        adipisci. Pariatur iusto asperiores consequatur nisi aperiam ullam
        assumenda nesciunt ipsum eius impedit eos nihil, sapiente, dolor sit
        labore! Maiores adipisci, ex quisquam pariatur dignissimos beatae error
        nostrum architecto magnam, deleniti voluptas distinctio. Laudantium
        suscipit hic est aliquam eaque aperiam, animi nam. Praesentium,
        molestias a placeat alias maxime quod perspiciatis quo harum dolor
        eveniet blanditiis consectetur minima corrupti autem quas. Minima,
        aperiam nam. Ducimus, beatae! Eveniet ipsa harum culpa provident
        dignissimos rem laboriosam facilis officia laudantium, iusto ratione id,
        nisi similique praesentium voluptas autem officiis dolores quod sunt
        libero tempora, quam magni enim! Tenetur iure nihil vel, distinctio
        illum eaque laudantium tempore ab saepe quibusdam praesentium quod
        commodi natus voluptatum itaque eligendi sint. Necessitatibus adipisci
        maiores iusto repellendus cupiditate excepturi odit dolor, quaerat
        voluptate! Voluptatem, architecto harum eum quasi asperiores autem
        nihil! Corporis repudiandae fugit rem placeat sint earum sapiente maxime
        necessitatibus minima aut facilis, aliquid tenetur aperiam expedita
        eaque quidem illo enim. Ut numquam, magni vitae itaque nostrum debitis,
        molestias nam eius mollitia tenetur magnam eveniet amet. Ea, quasi
        nihil! Aperiam repellendus a inventore est quae, alias provident quas
        magni nihil accusamus voluptatibus totam delectus aspernatur id
        praesentium sit eum officiis. Sequi doloremque sapiente error adipisci
        quos, dolore, illum esse tenetur temporibus doloribus nihil
        consequuntur, maxime reprehenderit laudantium ipsa? Corporis, suscipit?
      </p>
    </div>
  );
}

export default AIAssistant;
