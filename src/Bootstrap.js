import React from "react";

function Bootstrap() {
    return (
        <div>
            <div class="container text-start">
                <p class="lead">
                    Dolor pariatur Lorem ea culpa sunt in. Duis in esse proident
                    do ut aute exercitation tempor ex tempor consectetur fugiat.
                    Magna magna proident aliqua nisi officia esse. Culpa non
                    consequat reprehenderit irure laboris mollit eu officia
                    aliqua qui ex sunt culpa dolor. Duis ipsum in enim
                    reprehenderit ullamco ut laborum fugiat aliqua. Consequat
                    minim nulla Lorem eiusmod duis reprehenderit elit dolore
                    reprehenderit eiusmod dolore tempor aliqua. Ad adipisicing
                    cupidatat ad ad officia magna esse irure minim non aute nisi
                </p>
                <dl class="row">
                    <dt class="col-sm-3">Description lists</dt>
                    <dd class="col-sm-9">
                        A description list is perfect for defining terms.
                    </dd>

                    <dt class="col-sm-3">Term</dt>
                    <dd class="col-sm-9">
                        <p>Definition for the term.</p>
                        <p>And some more placeholder definition text.</p>
                    </dd>

                    <dt class="col-sm-3">Another term</dt>
                    <dd class="col-sm-9">
                        This definition is short, so no extra paragraphs or
                        anything.
                    </dd>

                    <dt class="col-sm-3 text-truncate">
                        Truncated term is truncated
                    </dt>
                    <dd class="col-sm-9">
                        This can be useful when space is tight. Adds an ellipsis
                        at the end.
                    </dd>

                    <dt class="col-sm-3">Nesting</dt>
                    <dd class="col-sm-9">
                        <dl class="row">
                            <dt class="col-sm-4">Nested definition list</dt>
                            <dd class="col-sm-8">
                                I heard you like definition lists. Let me put a
                                definition list inside your definition list.
                            </dd>
                        </dl>
                    </dd>
                </dl>
            </div>
        </div>
    );
}

export default Bootstrap;
