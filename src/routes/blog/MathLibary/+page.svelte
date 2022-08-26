<script lang="ts">

</script>

<svelte:head>
	<title>How I remade the python operators</title>
	<meta name="description" content="Python Math Libary" />
</svelte:head>

<div class="post">
	<h1>How I remade the python operators! 🖩</h1>
    <p>Hello everyone. Today, I decided to find out what 2 + 2 is.
        <br>But there is a catch. I can't use any math operators.
    </p>
    <p>Now how did I do this you may say. Well it is pretty simpile.</p>
    <p>Now before I tell you how I did this, we need to do a quick maht lesson.
        <br>Don't worry it's simpile.
    </p>
    <p>Back in 44,000 BCE counting was invented. Counting involed the simpile task of
        getting the number of objects in a finite area. I won't explain it too much since
        you guys probably know what it is.
    </p>
    <p>So we can use the same concept for our libary.
        <br> All we need to do is represent 1 as x. From there we can make a get number function
        that converts these x's into real numbers
    </p>
    <pre>def special_match(strg, search=re.compile(r'[^x]').search):     
    return not bool(search(strg))
def GetNumber(number):
    if special_match(number):
        return len(number)
    else:
        return "Invalid"</pre>
    <p>This checks if the string only contains x's. If so, we get the length of the string.
        <br>
        (I know this doesn't support negitive numbers but I don't care)
    </p>
    <p>Now with this basic principle I can make our adding function</p>
    <pre>def Add(*args):
        output = ""
        for i in args:
            output += i
        return GetNumber(output)</pre>
    <p>This gets the numbers we want to add. Then it appends them to a string called output.
        Then we call our get number function to convert our x's into a real number
    </p>
    <p>From there we can make our subtract function</p>
    <pre>def Subtract(*args):
        output = ""
        index = 0
        length = ""
        temp = 0
        for i in args:
            if Mod(GetX(len(args)), "xx") != 0:
                break
            temp = len(args[Add(GetX(index), "x")])
            for j in range(temp):
                length += "x"
            while True:
                if len(length) == 0:
                    break
                i = i[1:]
                length = length[1:]
            output += i
            index = Add(GetX(index), "x")
            args = args[:1]
        return GetNumber(output)</pre>
    <p>In summary this gets our numbers, it then checks if we have gotten through them all.
        If not then we get the length of the next number in the list before removing that many x's from the other number.
        <br>This function is hard to explain, so reading the code should explain it better.
    </p>
    <p>Now with our subtract function, we can do many things!
        <br>For example we can do multiplication and division
    </p>
    <p>Now at this point it's gonna get repetitive, complicated, and boring.
        <br>So I won't explain it too much. However the source code is on <a href="https://github.com/Twingamerdudes/Python-Math-Operators-Remade">Github</a>
    </p>
    <p>Well that's it! Have a amazing day, I and will see you in my next video, livestream, devlog, or blog post!</p>
</div>

<style>
    p{
        text-align: center;
    }
</style>
